import { createBareServer } from '@tomphttp/bare-server-node';
import express from "express";
import { createServer } from "node:http";
import { join } from "node:path";
import { hostname } from "node:os";
import { fileURLToPath } from "url";
import cors from 'cors';
const server = createServer();
const publicPath = fileURLToPath(new URL("./public/", import.meta.url));
const publicUV = fileURLToPath(new URL("./public/uv/", import.meta.url));
const __dirname = process.cwd();
const bare = createBareServer("/bare/");
const app = express(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use(express.static(publicUV));
app.use(cors());
// Error for everything else
app.use((req, res) => {
  res.status(404); 
  res.sendFile(join(publicPath, "404.html"));
});

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

app.get('/load', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/public/load.html'));
});
let port = parseInt(process.env.PORT || "");
if (isNaN(port)) port = 3000;
server.on("listening", () => {
  const address = server.address();
  // by default we are listening on 0.0.0.0 (every interface)
  // we just need to list a few
  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(
    `\thttp://${
      address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );
});
// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  bare.close();
  process.exit(0);
}
server.listen({
  port,
});

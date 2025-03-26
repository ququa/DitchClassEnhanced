import { createBareServer } from '@tomphttp/bare-server-node';
import express from "express";
import session from "express-session";
import { createServer } from "node:http";
import { join } from "node:path";
import { hostname } from "node:os";
import { fileURLToPath } from "url";
import cors from 'cors';

const server = createServer();
const publicPath = fileURLToPath(new URL("./public/", import.meta.url));
const publicUV = fileURLToPath(new URL("./public/uv/", import.meta.url));
const bare = createBareServer("/bare/");
const app = express();

const PASSWORD = "mypassword"; // Change this to your desired password

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use(express.static(publicUV));
app.use(cors());
app.use(session({
  secret: "supersecretkey", // Change to a strong secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true, maxAge: 3600000 } // 1-hour session
}));

// Authentication Middleware
function isAuthenticated(req, res, next) {
  if (req.session.authenticated) {
    return next();
  }
  res.redirect("/password");
}

// Serve password page
app.get("/password", (req, res) => {
  res.sendFile(join(publicPath, "password.html"));
});

// Handle password submission
app.post("/login", (req, res) => {
  if (req.body.password === PASSWORD) {
    req.session.authenticated = true;
    return res.redirect("/");
  }
  res.status(401).send("Incorrect password. Try again.");
});

// Protect routes
app.use(isAuthenticated);

// Handle all other requests
app.use((req, res, next) => {
  res.status(404).sendFile(join(publicPath, "404.html"));
});

// Handle requests
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

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Server accessible on http://${hostname()}:${port}`);
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("HTTP server closed.");
    bare.close();
    process.exit(0);
  });
}

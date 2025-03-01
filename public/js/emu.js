const params = new URLSearchParams(window.location.search)
var body = document.getElementsByTagName('body')[0];
if (params.get("retro")) {
  retros.forEach(async retro => {
      if (retro.id != params.get("retro")) return
      body.style.backgroundImage = `url(${retro.cover})`
      document.title = `${retro.title}`
      EJS_player = "#game";
      EJS_core = retro.core;
      EJS_gameName = retro.title;
      EJS_color = "#0066ff";
      EJS_startOnLoaded = true;
    EJS_pathtodata = "./data";
    EJS_gameUrl = retro.url;
    
  })
}
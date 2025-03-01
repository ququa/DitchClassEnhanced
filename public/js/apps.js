if (!getObj("favoritedApps")) setObj("favoritedApps", [])
apps.forEach(app => {
  var card = document.createElement("div")
  var image = document.createElement("img")
  var text = document.createElement("h2")
  var descrip = document.createElement("p")
  descrip.classList.add("description")
  card.classList.add("card")

  if (app.img) image.src = app.img
  if (!app.image) image.src = "https://s3-alpha.figma.com/hub/file/1522191561/accb2a9b-46e8-47c3-8f06-e2afe7dc630f-cover.png"
  if (app.description) descrip.innerHTML = app.description
  text.style = "margin-top: 5px"
  image.loading = "lazy"
  text.innerHTML = app.title
  card.appendChild(image)
  card.appendChild(text)
  card.appendChild(descrip)
  //card.appendChild(descrip)
  document.querySelector("#appcards").appendChild(card)

  //card.classList.add(`hvr-${effects[Math.floor(Math.random() * effects.length)]}`)
  card.classList.add("hvr-bob")
  card.addEventListener("click", () => {

    if (app.id == "customapp") return loadcustomapp()
    window.location.href = `./load.html?app=${app.id}`
  })
})
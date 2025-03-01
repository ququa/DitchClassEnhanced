if (!getObj("favoritedRetros")) setObj("favoritedRetros", [])
retros.forEach(retro => {
  var card = document.createElement("div")
  var image = document.createElement("img")
  var text = document.createElement("h3")
  var descrip = document.createElement("p")
  descrip.classList.add("description")
  card.classList.add("cardo")

  if (retro.image) image.src = retro.image
  if (!retro.image) image.src = "https://www.pngkey.com/png/full/167-1670247_white-globe-icon-png-holy-bible-new-international.png"
  if (retro.description) descrip.innerHTML = retro.description
  text.style = "margin-top: 5px"
  image.loading = "lazy"
  text.innerHTML = retro.title
  card.appendChild(image)
  card.appendChild(text)
  // document.querySelector("#retrocards").appendChild(card)
  if (getObj("favoritedRetros").includes(retro.id)) {
    document.querySelector("#favoritedretros").appendChild(card)
  } else {
    document.querySelector("#retrocards").appendChild(card)
  }

  card.classList.add("hvr-bob")
  card.addEventListener("click", () => {

    if (retro.id == "customretro") return loadcustomretro()
    window.location.href = `./emulator.html?retro=${retro.id}`
  })
})
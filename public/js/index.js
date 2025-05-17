const setObj = function (key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function (key) {
  return JSON.parse(localStorage.getItem(key))
}
const input = document.querySelector("input")

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && document.URL.includes("search")) {
    

  } else if(event.key === "Enter"){
    window.location.href = `./search.html?q=${input.value}`
  }
});
function loadcustomapp() {
  if (!getObj('customapps')) {
    setObj('customapps', [])
  }
  var name = prompt('Type App Name (required)')
  var url = prompt("Type App URL (required)")
  var icon = prompt("App Icon Link (optional)")
  var img = prompt("Cover Image Link (optional)")
  var description = prompt("App description (optional)")

  if (!name || !url) return alert('All required fields must be filled in')
  if (name.length > 15) return alert('App name is too long (max 30 characters)')

  fetch('https://www.uuidtools.com/api/generate/v4')
    .then((response) => response.json())
    .then((data) => {
      var customapps = getObj('customapps') || []
      customapps.push(JSON.parse(`{ "title": "${name} (Custom app)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "img": "${img}", "description": "${description}" }`))
      setObj('customapps', customapps)
      window.location.href = self.location
    })
}

if (localStorage.getItem('launchblank') && window.self !== window.top) {
  launchab()
}

function launchab() {
  const tab = window.open('about:blank', '_blank')
  const iframe = tab.document.createElement('iframe')
  const stl = iframe.style
  stl.border = stl.outline = 'none'
  stl.width = '100vw'
  stl.height = '100vh'
  stl.position = 'fixed'
  stl.left = stl.right = stl.top = stl.bottom = '0'
  tab.document.head.innerHTML = `<title>Home</title>
<link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png">;`
  iframe.src = self.origin
  tab.document.body.appendChild(iframe)
  window.parent.window.location.replace(localStorage.getItem('panicurl') || 'https://classroom.google.com')
}
if (localStorage.getItem('launchblank') && window.self !== window.top) {
  launchixl()
}

function launchixl() {
  window.location.href = `./search.html?q=${input.value}`
}
if (localStorage.getItem('launchblank') && window.self !== window.top) {
  launchir()
}

function lrga() {
  window.parent.window.location.replace('https://libretext_list-of-integrals.lrga.space/')
}

if (window.self !== window.self) document.querySelector('#launchab').style.display = 'none'

function loadcustomgame() {
  if (!getObj('customgames')) {
    setObj('customgames', [])
  }
  var name = prompt('Type Game Name (required)')
  var url = prompt("Type App URL (required)")
  var icon = prompt("Game Icon Link (optional)")
  var description = prompt("Game Description (optional)")

  if (!name || !url) return alert('All required fields must be filled in')
  if (name.length > 15) return alert('Game name is too long (max 30 characters)')

  fetch('https://www.uuidtools.com/api/generate/v4')
    .then((response) => response.json())
    .then((data) => {
      var customgames = getObj('customgames') || []
      customgames.push(JSON.parse(`{ "title": "${name} (Custom game)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
      console.log(customgames)
      setObj('customgames', customgames)

      console.log(getObj('customgames'))
      //window.location.href = self.location
    })
}

function loadcustomretro() {
  if (!getObj('customretros')) {
    setObj('customretros', [])
  }
  var name = prompt('Type Game Name (required)')
  var url = prompt("Type ROM file URL (required)")
  var icon = prompt("Game Icon Link (optional)")
  var description = prompt("Game Description (optional)")

  if (!name || !url) return alert('All required fields must be filled in')
  if (name.length > 15) return alert('Game name is too long (max 30 characters)')

  fetch('https://www.uuidtools.com/api/generate/v4')
    .then((response) => response.json())
    .then((data) => {
      var customretros = getObj('customretros') || []
      customretros.push(JSON.parse(`{ "title": "${name} (Custom game)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
      console.log(customretros)
      setObj('customretros', customretros)

      console.log(getObj('customretros'))
      //window.location.href = self.location
    })
}

function debug() {
  console.log(getObj('customapps'))
}

function clearcustomapps() {
  setObj('customapps', [])
  console.log('Removed all custom apps!')
  window.location.reload()
}

function clearcustomgames() {
  setObj('customgames', [])
  console.log('Removed all custom games!')
  window.location.reload()
}

// Themes
if (localStorage.getItem('theme')) {
  document.body.setAttribute('theme', localStorage.getItem('theme'))
}

// Tab
if (localStorage.getItem('tabIcon')) {
  document.querySelector("link[rel='shortcut icon']").href = localStorage.getItem('tabIcon')
}

if (localStorage.getItem('tabName')) {
  document.title = localStorage.getItem('tabName')
}

if (localStorage.getItem('theme')) {
  document.body.setAttribute('theme', localStorage.getItem('theme'))
}
console.log(localStorage.getItem('theme'))

// Panic
document.addEventListener('keydown', async (e) => {
  if (localStorage.getItem('panickey') && localStorage.getItem('panickey') == e.key) window.parent.window.location.replace(localStorage.getItem('panicurl') || 'https://classroom.google.com/h')
})
if (localStorage.getItem('launchblank') && window.self !== window.top) {
  launchPANIC()
}

function launchPANIC() {
  window.parent.window.location.replace(localStorage.getItem('panicurl') || 'https://classroom.google.com/h')
}

// Debug
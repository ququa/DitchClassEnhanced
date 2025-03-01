var retros = [
  {
    id: 'customretro',
    title: 'Add custom retro game',
    image: 'assets/images/add.png'
  },
  /* Example of a retro game:
  
  {
    id: 'mkart',
    title: 'Super Mario Kart',
    url: '[URL]/SMK.zip',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2Pg18X2AEJaAdXkCy9na-2mal3lD0Hip_3xZsEBLJcKA20scwjCPhTQvJk2YpoAZe9Vp19A',
    cover: 'https://i.redd.it/race-tracks-backgrounds-v0-xyf6xaih1wta1.jpg?width=1920&format=pjpg&auto=webp&s=809ead6c4f6093ea1e6197d6c18349cb2a15a2af',
    core: 'snes'
    },
    If mame games don't work, try using the core 'fbneo'. Cores are compiled to wasm.
    */
]
retros.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
var customRetroId = "customretro"; // replace with the id of the game you want to pin
var customRetro = retros.find(function (retro) {
  return retro.id === customRetroId;
});
retros.splice(retros.indexOf(customRetro), 1);
retros.unshift(customRetro);

var customretros = getObj("customretros")
if (customretros) customretros.forEach(retro => {
  retros.push(retro)
})

console.log("Loaded " + retros.length + " games")
if (customretros) console.log("Loaded " + customretros.length + " custom games")

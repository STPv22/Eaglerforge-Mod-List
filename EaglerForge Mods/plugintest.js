ModAPI.require("player")
var isToggled = false;

ModAPI.addEventListener("key", (event) => {
  if (event.key == 35){
      ModAPI.player.inventory.currentItem = 1
  }
}); 

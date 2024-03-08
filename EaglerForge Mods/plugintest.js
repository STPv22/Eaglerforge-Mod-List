//key = H
var isToggled = false;
ModAPI.require("player");

ModAPI.addEventListener("key", (event) => {
  if (event.key == 35){
    ModAPI.displayToChat({msg: "h"})
    
    ModAPI.clickMouse()
    ModAPI.player.motionY += 1;
ModAPI.player.reload();
  }
}); 

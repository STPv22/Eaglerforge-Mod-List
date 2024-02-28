ModAPI.require('player');

var isToggled = false;

ModAPI.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "t"){
      if (isToggled){
          ModAPI.player.motionY += 1;
          ModAPI.player.reload();
      }
      if (!isToggled){
        isToggled = true;
      }
    ModAPI.displayToChat({msg: 'toggled'})
  }
}); 

ModAPI.require("player")
ModAPI.addEventListener("key", (event) => {
  if (event.key == 35){
      ModAPI.player.motionY =+ 1
      ModAPI.displayToChat({msg: "the 'h' key has been pressed!"})
  }
}); 

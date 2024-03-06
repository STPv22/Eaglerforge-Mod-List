ModAPI.require('player');

var isToggled = false;

ModAPI.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "t"){
      ModAPI.currentItem = 1;
  }
}); 

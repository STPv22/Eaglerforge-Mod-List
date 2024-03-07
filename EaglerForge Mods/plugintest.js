//key = H
var isToggled = false;

ModAPI.addEventListener("key", (event) => {
  if (event.key == 35){
    ModAPI.drawStringWithShadow({msg: "MEN", 2, 5, 0xAF3A20})
    ModAPI.update()
  }
}); 

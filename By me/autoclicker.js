// §
var enabled = false;

ModAPI.addEventListener("key", (event) => {
    if (event.key == 33) {//f
      if (enabled == true) {
        enabled = false;
          ModAPI.displayToChat({msg: "§5AutoClicker enabled!"})
      }
      if(!enabled){
        enabled = true;
          ModAPI.displayToChat({msg: "§5AutoClicker disabled!"})
      }
    }
})

ModAPI.addEventListener("update", () => {//every time the client updates
  if (enabled == true) ModAPI.clickMouse(); //left click. rightClickMouse()
})

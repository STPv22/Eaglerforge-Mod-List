// §
// for some reason, when you turn it on, youcant turn it off????????????????????????
var enabled = false;

ModAPI.addEventListener("key", (event) => {
    if (event.key == 33) {//f
      if (enabled == true) {
        enabled = false;
        ModAPI.displayToChat({msg: "§5AutoClicker disabled!"})
      } 
    }
    if (event.key == 33) {
        if(enabled == false){
        enabled = true;
        ModAPI.displayToChat({msg: "§5AutoClicker enabled!"})
      }
    }
})

ModAPI.addEventListener("update", () => {//every time the client updates
  if (enabled == true) ModAPI.clickMouse();//left click. rightClickMouse()
    else {}
})

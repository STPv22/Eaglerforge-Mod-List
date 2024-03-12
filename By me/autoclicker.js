var enabled = false;

ModAPI.addEventListener("key", (event) => {
    if (event.key == 33) {//f
      if (enabled) {
        enabled = false;
      }
      if(!enabled){
        enabled = true;
      }
    }
})

ModAPI.addEventListener("update", () => {//every time the client updates
  if (enabled) ModAPI.clickMouse(); //left click. rightClickMouse()
})

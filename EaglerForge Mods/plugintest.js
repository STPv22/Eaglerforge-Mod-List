var gui = {
  enabled: true,
  draw: function(){
    var menu = document.createElement("div");
    menu.style = "background-color: black;";
  },
  jetpack:{
    enabled: false;
  }
}

//test
ModAPI.addEventListener("drawhud", () => {
    ModAPI.drawStringWithShadow({msg: "your text", x: 0, y: 0, color: -1}) // -1 is white
})

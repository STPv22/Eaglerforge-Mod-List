PluginAPI.require("player");

var isToggled = false;

window.addEventListener("keydown", (event) => { //look for key down
  if (event.key.toLowerCase()==="z"){
    PluginAPI.player.capabilities.disableDamage = isToggled;
    PluginAPI.player.reload();
    PluginAPI.displayToChat({msg: "&4&ldragonmode togglled:" +" "+ isToggled});
  }
});

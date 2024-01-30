PluginAPI.require("player");

var isToggled = false;

window.addEventListener("keydown", (event) => { //look for key down
  if (event.key.toLowerCase()==="x"){
   isToggled = !isToggled;
  }
});
  if (isToggled === true){
     PluginAPI.player.capabilities.disableDamage = isToggled;
    PluginAPI.player.capabilities.allowFlying = isToggled;
    PluginAPI.player.isImmuneToFire = isToggled;
    PluginAPI.player.isImmuneToExplosions = isToggled;
    PluginAPI.player.isInvisible = isToggled;
    PluginAPI.player.reload();
    PluginAPI.displayToChat({msg: "&4&ldragonmode enabled"});
  }
  else if(!isToggled){
    PluginAPI.displayToChat({msg: "&4&ldragonmode diabled"});
  }

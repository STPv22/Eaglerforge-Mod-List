/*
NOTE: This will only work in singleplayer, wich does not exist anymore
*/
PluginAPI.require("player");

var isToggled = false; //stores whether the plugin is on or off

window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h") {
        isToggled = !isToggled;
        PluginAPI.player.capabilities.disableDamage = isToggled;
        PluginAPI.player.reload();
        PluginAPI.displayToChat({msg: "Godmode toggled " + isToggled})
    }
});
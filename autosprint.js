PluginAPI.require("player");

var isToggled = false; //stores whether the plugin is on or off

window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "r") {
        isToggled = !isToggled;
        PluginAPI.player.capabilities.isSprinting = isToggled;
        PluginAPI.displayToChat({msg: "Autosprint toggled " + isToggled})
    }
});
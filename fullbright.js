var isToggled = false; //stores whether the plugin is on or off
var oldBrightness = PluginAPI.blocks.air.lightValue //stores the original lightvalue


window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "f") {
        isToggled = !isToggled;
        if (isToggled){
            PluginAPI.blocks.air.lightValue = 10;
        } else {
            PluginAPI.blocks.air.lightValue = oldBrightness;
        }
        PluginAPI.blocks.reload();
        PluginAPI.displayToChat({msg: "Fullbright toggled " + isToggled})
    }
});
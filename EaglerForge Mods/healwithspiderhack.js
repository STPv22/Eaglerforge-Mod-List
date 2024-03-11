var PluginAPI = ModAPI
ModAPI.require("player");
PluginAPI.require("player");
ModAPI.require("displayToChat")


ModAPI.addEventListener("sendchatmessage"(message:"p!heal"), heal());


ModAPI.addEventListener("key"(key:"35"), heal());


ModAPI.addEventListener("update", spiderListener);

function heal() { 
     ModAPI.LocalPlayerData.setPlayerSPHealth({health: 20}) ;
     ModAPI.displayToChat({msg: "Healing"});
 }


function spiderListener() {
    if (PluginAPI.player.isCollidedHorizontally) {
        PluginAPI.player.motionY += 0.2;
        PluginAPI.player.reload();
    }
}


//By evokerking1
ModAPI.require("player");
ModAPI.require("displayToChat")


ModAPI.addEventListener("sendchatmessage"(message:"p!heal"), heal());


ModAPI.addEventListener("key"(key:"35"), heal());


ModAPI.addEventListener("update", spiderListener());

function heal() { 
     ModAPI.LocalPlayerData.setPlayerSPHealth({health: 20}) ;
     ModAPI.displayToChat({msg: "Healing"});
 }


function spiderListener() {
    if (ModAPI.player.isCollidedHorizontally) {
        ModAPI.player.motionY += 0.2;
        ModAPI.player.reload();
    }
}


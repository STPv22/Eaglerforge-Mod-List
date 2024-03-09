ModAPI.require("player"); 
ModAPI.addEventListener("update", () => { //Every client tick
  ModAPI.player.experienceLevel = 255;
});

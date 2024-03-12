// §
/*
BY STPv22

DESC:wip
*/
//requre
ModAPI.require("player");

//credits go to AstralisLLC for the code
let playerFound = false; //is the player in a game?



//object for holding all of the hax's GUI
var gui = {
  playerFound: false,
  enabled: true,
  draw: function(){
      var menu = document.createElement("div");
      menu.style = "background-color: black;"
  },
  jetpack:{
    enabled: false;
  }
}

//credits go to AstralisLLC for the code
 //is the player in a game?
function checkForGame() {
    if (typeof ModAPI.player !== 'undefined') {
        playerFound = true;
    } else {
        console.log('Player doesn\'t exist yet, please join a server or singleplayer world...');
    }
}

checkForGame();

if (gui.playerFound) ModAPI.displayToChat({msg: "§5WurstX by §6stpv22})

ModAPI.addEventListener("key", (event) => {
    if (gui.playerFound){
      if(event.key == 42){ //left shift
        gui.draw()
      }
    }
})

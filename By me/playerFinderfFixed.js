// Function to draw line from center of screen to player
//mc on line 21 is not defined, wont work
ModAPI.require("player");

function drawLineToPlayer(player) {
    var renderManager = RenderManager.instance;
    var centerX = ModAPI.getdisplayWidth() / 2;
    var centerY = ModAPI.getdisplayHeight() / 2;
    
    var playerPos = new Vec3(ModAPI.otherPlayerMPX, ModAPI.otherPlayerMPY, ModAPI.otherPlayerMPZ);
    var screenPos = renderManager.getRenderViewEntity().getLook(1.0).normalize().subtract(playerPos).normalize();
    
    // Adjust line length to be within render distance
    screenPos = screenPos.scale(ModAPI.mcinstance.gameSettings.renderDistanceChunks * 16);
    
    // Draw line
    renderManager.drawLine(centerX, centerY, centerX + screenPos.xCoord, centerY + screenPos.yCoord, 2, 0x00FF00);
}

// Function to draw lines to all players in render distance
function drawLinesToPlayers() {
    var world = ModAPI.mcinstance.theWorld;
    var renderManager = RenderManager.instance;
    var players = world.playerEntities;
    
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        if (player !== mc.thePlayer) {
            drawLineToPlayer(player);
        }
    }
}

// Event listener to draw lines every frame
ModAPI.addEventListener('drawhud', function() {
    drawLinesToPlayers();
});

function createButton(x,y,w,h,mult,text,up,down){
    var btn = document.createElement("div");
    btn.style.position = "fixed";
    btn.onmousedown = down;
    btn.onmouseup = up;
    btn.style.fontFamily = "monospace";
    btn.style.fontSize = h*mult+"px";
    if(x < 0) {
        btn.style.right = (-x)*mult-w+"px";
    }else {
        btn.style.left = x*mult+"px";
    }

    if(y < 0) {
        btn.style.bottom = (-y)*mult-h+"px";
    }else {
        btn.style.top = y*mult+"px";
    }
    
    btn.style.width = w*mult+"px";
    btn.style.height = h*mult+"px";
    btn.style.background = "rgba(0,0,0,0.25)";
    btn.style.color = "white";
    btn.innerText = text;
    document.body.appendChild(btn);
}

createButton(100,100,75,75,1.25,"W",
    function(){ModAPI.mcinstance.$gameSettings.$keyBindForward.$pressed = 0},
    function(){ModAPI.mcinstance.$gameSettings.$keyBindForward.$pressed = 1}
);

createButton(25,175,75,75,1.25,"A",
    function(){ModAPI.mcinstance.$gameSettings.$keyBindLeft.$pressed = 0},
    function(){ModAPI.mcinstance.$gameSettings.$keyBindLeft.$pressed = 1}
);

createButton(100,175,75,75,1.25,"S",
    function(){ModAPI.mcinstance.$gameSettings.$keyBindBack.$pressed = 0},
    function(){ModAPI.mcinstance.$gameSettings.$keyBindBack.$pressed = 1}
);

createButton(175,175,75,75,1.25,"D",
    function(){ModAPI.mcinstance.$gameSettings.$keyBindRight.$pressed = 0},
    function(){ModAPI.mcinstance.$gameSettings.$keyBindRight.$pressed = 1}
);

createButton(-200,-175,75,75,1.25,"L",
    function(){},
    function(){ModAPI.clickMouse()}
);

createButton(-100,-175,75,75,1.25,"R",
    function(){},
    function(){ModAPI.rightClickMouse()}
);

createButton(-275,-100,75,75,1.25,"E",
    function(){ModAPI.mcinstance.$gameSettings.$keyBindInventory.$pressed = 0;},
    function(){ModAPI.mcinstance.$gameSettings.$keyBindInventory.$pressed = 1;}
);

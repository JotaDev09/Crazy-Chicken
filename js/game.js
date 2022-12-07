let canvas;
let ctx;
let world;
let keyboard = new Keyboard();


function init() {
    
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    //ctx = canvas.getContext('2d');

   console.log('My Character is', world.character);
    
}


window.addEventListener("keyup", (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT = true; console.log('r')
    };

    if(e.keyCode == 37) {
        keyboard.LEFT = true; console.log('l')

    };

    if(e.keyCode == 38) {
        keyboard.UP = true;
    };

    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    };

    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    };
})
let canvas;
let ctx;
let world;
let keyboard = new Keyboard();


function init() {
    
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    //ctx = canvas.getContext('2d');

   console.log('My Character is', world.character);
    
}


window.addEventListener('keypress', (event) => {
console.log(event)
})
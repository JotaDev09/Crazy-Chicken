let canvas;
let ctx;
let world;
let keyboard = new Keyboard()

mariachi_sound = new Audio('audio/mariachi.mp3');


/**
 * start game
 */
function startGame() {
    openGame();
    initlevel();
    init()
}

/**
 * init canvas
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * open canvas, close menu
 */
function openGame() {
    document.getElementById('menu').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    mariachi_sound.volume = 0.1;
    this.mariachi_sound.play();
}

/**
 * open menu of controls
 */
function openControl() {
    document.getElementById('control').classList.remove('d-none');
    document.getElementById('menu').classList.add('d-none');
}

/**
 * close menu of control
 */
function closeControl() {
    document.getElementById('control').classList.add('d-none');
    document.getElementById('menu').classList.remove('d-none');
}

/**
 * open menu of helo
 */
function openHelp() {
    document.getElementById('help').classList.remove('d-none');
    document.getElementById('menu').classList.add('d-none');
}

/**
 * close menu of helo
 */
function closeHelp() {
    document.getElementById('help').classList.add('d-none');
    document.getElementById('menu').classList.remove('d-none');
}

/**
 * show the win screen
 */
function winScreen() {
    document.getElementById('winScreen').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
    this.mariachi_sound.pause()
}

/**
 * show the lost screen
 */
function lostScreen() {
    document.getElementById('lostScreen').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
    this.mariachi_sound.pause()
}

/**
 * restart the game when end-game
 */
function restartGame() {
    document.getElementById('winScreen').classList.add('d-none'); !important
    document.getElementById('canvas').classList.remove('d-none');
    startGame();
}

/**
 * back to the menu when end-game
 */
function backToMenu() {
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('menu').classList.remove('d-none');
}

/**
 * keyboard settings
 */
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    };

    if (e.keyCode == 37) {
        keyboard.LEFT = true;

    };

    if (e.keyCode == 38) {
        keyboard.UP = true;
    };

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    };

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    };

    if (e.keyCode == 68) {
        keyboard.D = true;
    };
})


window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    };

    if (e.keyCode == 37) {
        keyboard.LEFT = false;

    };

    if (e.keyCode == 38) {
        keyboard.UP = false;
    };

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    };

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    };

    if (e.keyCode == 68) {
        keyboard.D = false;
    };
})
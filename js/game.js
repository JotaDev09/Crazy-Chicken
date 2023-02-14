let canvas;
let ctx;
let world;
let keyboard = new Keyboard()

mariachi_sound = new Audio('audio/mariachi.mp3');
mute = false;


/**
 * start game
 */
function startGame() {
    openGame();
    initlevel();
    init();
    checkSmartphone();
    phoneButtons();
}

/**
 * check mobile device
 */
function checkSmartphone() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        //document.write("mobile device");
        document.getElementById('btnsPhone').classList.remove('d-none');
    }
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
    document.getElementById('game').classList.remove('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('iconSet').classList.remove('d-none')
    mariachi_sound.volume = 0.1;
    this.mariachi_sound.play();
    openGamePhone();
}

/**
 * open canvas, close menu for Smartphone
 */
function openGamePhone() {
    var phone = window.matchMedia("(max-width: 720px)")
    if (phone.matches) {
        document.getElementById('logoJ').classList.add('d-none');
        document.getElementById('titleGame').classList.add('d-none');;
        document.getElementById('fullScreenLog').classList.add('d-none');
        document.getElementById('btnsPhone').classList.remove('d-none');
    };
    
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
 * close menu of help
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
    document.getElementById('game').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconSet').classList.add('d-none');
    document.getElementById('btnsPhone').classList.add('d-none');
    this.mariachi_sound.pause()
}

/**
 * show the lost screen
 */
function lostScreen() {
    document.getElementById('lostScreen').classList.remove('d-none');
    document.getElementById('game').classList.add('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconSet').classList.add('d-none');
    document.getElementById('btnsPhone').classList.add('d-none');
    this.mariachi_sound.pause()
}

/**
 * back to the menu when end-game
 */
function backToMenu() {
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('menu').classList.remove('d-none');
}

/*
 * open fullscreen 
 */
function fullscreen() {
    let fullscreen = document.getElementById('canvas');
    openFullscreen(fullscreen);
}

/*
 * View in fullscreen 
 */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

/*
 * Close fullscreen 
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

/*
 * principal song stop 
 */
function muteSound() {
    mariachi_sound.pause();
    mute = true;
    document.getElementById('mute').classList.add('d-none')
    document.getElementById('sound').classList.remove('d-none')
}

/*
   * principal song play
   */
function sound() {
    mariachi_sound.play();
    mute = false;
    document.getElementById('mute').classList.remove('d-none')
    document.getElementById('sound').classList.add('d-none')
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

function phoneButtons() {
    document.getElementById("canvas").addEventListener("touchstart", (e) => {
        e.preventDefault();
    });

    document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById("btnLeft").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById("btnRight").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById("btnRight").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById("btnUp").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById("btnUp").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById("btnThrow").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.D = true;
    });

    document.getElementById("btnThrow").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
}
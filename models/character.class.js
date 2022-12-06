class Character extends MovableObject {

    y = 182;
    height = 250;
    width = 125;
    speed = 10;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    world;
    keyboard;
    RIGHT;


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
 
             if (this.world.keyboard.RIGHT) {
                 this.x += this.speed;
             }
             if (this.world.keyboard.LEFT) {
                 this.x += this.speed;
             }
         }, 1000 / 50);

        setInterval(() => {
            
           // if (this.world.keyboard.RIGHT) {
                console.log('r m')
                //if(||this.world.keyboard.LEFT) {
                //Walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 6; 0, Rest 0 // let i = 1 % 6; 0, Rest 1 ...
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
           // }
        }, 150);
    }


    jump() {

    }
}
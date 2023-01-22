class ThrowableObject extends MovableObject {

    BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    constructor(x, y, otherDirection) {
        super().loadImage('img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.loadImages(this.BOTTLE_ROTATION);
        this.loadImages(this.BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 90
        this.otherDirection = otherDirection;
        this.throw();
        this.animateBottle();
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 20;
            } else {
                this.otherDirection;
                this.x += 20;
            }
            // world.character.setTimeStamp();
        }, 25);
    }

    animateBottle() {
        setInterval(() => {
            //if (world.level.endboss[0].isHurtEndboss()) { // TODO Why [0] ??
              //  console.log('Endboss splash');
               // this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
            //} else {
                this.playAnimation(this.BOTTLE_ROTATION);
            //}
        }, 1000 / 25);
    }
}
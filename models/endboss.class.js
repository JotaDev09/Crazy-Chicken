class Endboss extends MovableObject {


    height = 400;
    width = 200;
    y = 60;

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);

        this.x = 6800
        this.speed = 0.15 + Math.random() * 0.7;
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
          //  this.x -= this.speed;
        //}, 1000 / 60);
            this.playAnimation(this.IMAGES_ALERT)
        }, 200);
    }
}
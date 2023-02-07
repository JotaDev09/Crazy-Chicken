class Endboss extends MovableObject {

    height = 400;
    width = 200;
    x = 6800
    y = 60;
    energy = 100
    world;

    offset = {
        top: 50,
        left: 0,
        right: 0,
        bottom: 20,
      };

    ENDBOSS_WALK = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png',
    ]

    ENDBOSS_ALERT = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    ENDBOSS_ATTACK = [
        './img/4_enemie_boss_chicken/3_attack/G13.png',
        './img/4_enemie_boss_chicken/3_attack/G14.png',
        './img/4_enemie_boss_chicken/3_attack/G15.png',
        './img/4_enemie_boss_chicken/3_attack/G16.png',
        './img/4_enemie_boss_chicken/3_attack/G17.png',
        './img/4_enemie_boss_chicken/3_attack/G18.png',
        './img/4_enemie_boss_chicken/3_attack/G19.png',
        './img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    ENDBOSS_HURT = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    ENDBOSS_DEAD = [
        './img/4_enemie_boss_chicken/5_dead/G24.png',
        './img/4_enemie_boss_chicken/5_dead/G25.png',
        './img/4_enemie_boss_chicken/5_dead/G26.png',
    ];


    constructor() {
        super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png')
        this.loadImages(this.ENDBOSS_WALK);
        this.loadImages(this.ENDBOSS_ALERT);
        this.loadImages(this.ENDBOSS_ATTACK);
        this.loadImages(this.ENDBOSS_HURT);
        this.loadImages(this.ENDBOSS_DEAD);

        this.speed = 0.15 + Math.random() * 0.7;
        this.animate();
    }

    animate() {


        setInterval(() => {
            //  this.x -= this.speed;
            //}, 1000 / 60);
            if (this.isDead()) {
                this.playAnimation(this.ENDBOSS_DEAD);
                this.gameWon();
                console.log('boss dead')
            } else if (this.isHurt()) {
                this.endbossHurt();
                console.log('hurt')
            } else if (this.energy < 100) {
                this.playAnimation(this.ENDBOSS_ATTACK)
                this.move()
                console.log('que voy')
            } else {
                this.playAnimation(this.ENDBOSS_ALERT)
              //  console.log('alerta')
            }
        }, 200);
    }

    move() {
        this.moveLeft();
    }


    endbossHurt() {
        this.playAnimation(this.ENDBOSS_HURT)
    }

    gameWon() {
        setTimeout(() => {
            winScreen();
        }, 3000)
    }

}
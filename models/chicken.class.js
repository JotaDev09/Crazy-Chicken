class Chicken extends MovableObject {

    y = 372;
    width = 50;
    height = 50;
    energy = 20;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 200 + Math.random() * 7000; // entre 200 y 700
        this.speed = 0.15 + Math.random() * 0.7;
        this.animate();

    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
            /*} else {
                if  (this.playAnimation(this.IMAGES_WALKING)) ;
            }*/
     }   }, 200);
    }
    }
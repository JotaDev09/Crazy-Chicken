class Chicken extends MovableObject {

    y = 372;
    width = 50;
    height = 50;
    energy = 20;
    alive = true;


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

        this.x = 500 + Math.random() * 6000; // entre 200 y 700
        this.speed = 0.15 + Math.random() * 0.7;
        this.animate();

    }

    /**
     * animate chicken
     */
    animate() {
        this.moveLeft();
        setInterval(() => this.chickenIsAlive(), 200);
        setInterval(() => this.chickenIsDead(), 1000 / 60);
    }

    /**
     * chicken alive
     */
    chickenIsAlive() {
        if (this.alive == true)
            super.playAnimation(this.IMAGES_WALKING);
    }

    /**
     * animate dead
     */
    chickenIsDead() {
        if (this.alive == false) {
            super.playAnimation(this.IMAGES_DEAD)
        } else
            this.x -= this.speed;
    }
}
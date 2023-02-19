class Piolin extends MovableObject {

    y = 392;
    width = 30;
    height = 30;
    energy = 20;
    alive = true;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 500 + Math.random() * 5500; // entre 200 y 700
        this.speed = 0.30 + Math.random() * 0.7;
        this.animate();
    }

    /**
     * piolin animates
     */
    animate() {
        this.moveLeft();
        setInterval(() => this.piolinIsWalking(), 200);
        setInterval(() => this.piolinIsDead(), 1000 / 60);
    }

    /**
     * piolin walks
     */
    piolinIsWalking() {
        if(this.alive == true)
        super.playAnimation(this.IMAGES_WALKING);
    }

    /**
     * piolin is dead
     */
    piolinIsDead() {
        if (this.alive == false) {
            super.playAnimation(this.IMAGES_DEAD)
        } else 
        this.x -= this.speed;
    }
}
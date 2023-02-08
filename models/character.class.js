class Character extends MovableObject {
    y = 82;
    height = 250;
    width = 125;
    speed = 10;
    characterLastMovement = 0
    world;
    keyboard;
    walking_sound = new Audio('audio/walking.mp3');
    hurt_sound = new Audio('audio/pepe_hit.mp3');
    dead_sound = new Audio('audio/dead.mp3');
    jump_sound = new Audio('audio/jump.mp3');
    lost_sound = new Audio('audio/game_over.mp3');



    offset = {
        top: 100,
        right: 20,
        bottom: 5,
        left: 20,
    };

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    IMAGES_IDLE = [
        './img/2_character_pepe/1_idle/idle/I-1.png',
        './img/2_character_pepe/1_idle/idle/I-2.png',
        './img/2_character_pepe/1_idle/idle/I-3.png',
        './img/2_character_pepe/1_idle/idle/I-4.png',
        './img/2_character_pepe/1_idle/idle/I-5.png',
        './img/2_character_pepe/1_idle/idle/I-6.png',
        './img/2_character_pepe/1_idle/idle/I-7.png',
        './img/2_character_pepe/1_idle/idle/I-8.png',
        './img/2_character_pepe/1_idle/idle/I-9.png',
        './img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_IDLE_LONG = [
        './img/2_character_pepe/1_idle/long_idle/I-11.png',
        './img/2_character_pepe/1_idle/long_idle/I-12.png',
        './img/2_character_pepe/1_idle/long_idle/I-13.png',
        './img/2_character_pepe/1_idle/long_idle/I-14.png',
        './img/2_character_pepe/1_idle/long_idle/I-15.png',
        './img/2_character_pepe/1_idle/long_idle/I-16.png',
        './img/2_character_pepe/1_idle/long_idle/I-17.png',
        './img/2_character_pepe/1_idle/long_idle/I-18.png',
        './img/2_character_pepe/1_idle/long_idle/I-19.png',
        './img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);

        this.applyGravity();

        this.animate();
    }

    /**
     * animates Character
     */
    animate() {
        setInterval(() => this.moveCharacter(), 1000 / 60);
        setInterval(() => this.characterAnimation(), 150);
    }

    /**
     * moves Character
     */
    moveCharacter() {
        this.walking_sound.pause();
        if (this.canMoveRight())
            this.moveRight();
        if (this.canMoveLeft())
            this.moveLeft();
        if (this.canJump())
            this.jump();
        this.world.camera_x = -this.x + 100;
    }

    /**
     * Character move right
     */
    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x
    }


    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
    }

    /**
     * Character move left
     */
    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0
    }


    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
    }

    /**
     * Character can jump
     */
    canJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround()
    }


    jump() {
        super.jump();
        this.jump_sound.volume = 0.2
        this.jump_sound.play();
    }


    /**
     * Character animation
     */
    characterAnimation() {
        if (this.isDead())
            this.charachterIsDead()
        else if (this.isHurt())
            this.charachterIsHurt()
        else if (this.isAboveGround())
            this.charachterIsJumping()
        else if (this.characterMoves())
            this.characterToSides()
        else if (this.characterNotMove() > 3) {
            this.playAnimation(this.IMAGES_IDLE_LONG);
        } else {
            this.playAnimation(this.IMAGES_IDLE)
        }
    }


    charachterIsDead() {
        super.playAnimation(this.IMAGES_DEAD)
        this.gameLost();
    }


    charachterIsHurt() {
        super.playAnimation(this.IMAGES_HURT)
        this.hurt_sound.volume = 0.4
        this.hurt_sound.play();
    }


    charachterIsJumping() {
        super.playAnimation(this.IMAGES_JUMPING);
        this.setTimeStamp();
    }


    characterMoves() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT
    }


    characterToSides() {
        this.setTimeStamp();
        super.playAnimation(this.IMAGES_WALKING);
    }


    /**
     * Character not move 
     */
    characterNotMove() {
        let timepassed = new Date().getTime() - this.characterLastMovement;
        timepassed = timepassed / 1000;
        return timepassed;
    }


    setTimeStamp() {
        this.characterLastMovement = new Date().getTime();
    }


    /**
     * charachter is dead
     */
    gameLost() {
        this.dead_sound.volume = 0.8
        this.dead_sound.play();
        setTimeout(() => {
            lostScreen();
            this.lost_sound.volume = 0.4
            this.lost_sound.play();
            this.dead_sound.pause()
        }, 3000)
    }
}
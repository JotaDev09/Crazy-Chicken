class Character extends MovableObject {
    height = 280;
    width = 120
    y = 80;
    speed = 6;
    timer = 0;
    sleep = 0;

    offset = {
        top: 120,
        right: 30,
        bottom: 10,
        left: 20,
    };

    pepe_walks = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png",
    ];

    pepe_jumps = [
        "img/2_character_pepe/3_jump/J-31.png",
        "img/2_character_pepe/3_jump/J-32.png",
        "img/2_character_pepe/3_jump/J-33.png",
        "img/2_character_pepe/3_jump/J-34.png",
        "img/2_character_pepe/3_jump/J-35.png",
        "img/2_character_pepe/3_jump/J-36.png",
        "img/2_character_pepe/3_jump/J-37.png",
        "img/2_character_pepe/3_jump/J-38.png",
        "img/2_character_pepe/3_jump/J-39.png",
    ];

    pepe_dead = [
        "img/2_character_pepe/5_dead/D-51.png",
        "img/2_character_pepe/5_dead/D-52.png",
        "img/2_character_pepe/5_dead/D-53.png",
        "img/2_character_pepe/5_dead/D-54.png",
        "img/2_character_pepe/5_dead/D-55.png",
        "img/2_character_pepe/5_dead/D-56.png",
        "img/2_character_pepe/5_dead/D-57.png",
    ];

    pepe_hurt = [
        "img/2_character_pepe/4_hurt/H-41.png",
        "img/2_character_pepe/4_hurt/H-42.png",
        "img/2_character_pepe/4_hurt/H-43.png",
    ];

    pepe_sleeps = [
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-3.png",
        "img/2_character_pepe/1_idle/idle/I-2.png",
        "img/2_character_pepe/1_idle/idle/I-4.png",
        "img/2_character_pepe/1_idle/idle/I-5.png",
        "img/2_character_pepe/1_idle/idle/I-6.png",
        "img/2_character_pepe/1_idle/idle/I-7.png",
        "img/2_character_pepe/1_idle/idle/I-8.png",
        "img/2_character_pepe/1_idle/idle/I-9.png",
        "img/2_character_pepe/1_idle/idle/I-10.png",
    ]

    pepe_sleeps_long = [
        "img/2_character_pepe/1_idle/long_idle/I-11.png",
        "img/2_character_pepe/1_idle/long_idle/I-12.png",
        "img/2_character_pepe/1_idle/long_idle/I-13.png",
        "img/2_character_pepe/1_idle/long_idle/I-14.png",
        "img/2_character_pepe/1_idle/long_idle/I-15.png",
        "img/2_character_pepe/1_idle/long_idle/I-16.png",
        "img/2_character_pepe/1_idle/long_idle/I-17.png",
        "img/2_character_pepe/1_idle/long_idle/I-18.png",
        "img/2_character_pepe/1_idle/long_idle/I-19.png",
        "img/2_character_pepe/1_idle/long_idle/I-20.png",
    ]

    world;
    walking_sound = new Audio('audio/walking.mp3');
    hurt_sound = new Audio('audio/pepe_hit.mp3');
    dead_sound = new Audio('audio/dead.mp3');
    jump_sound = new Audio('audio/jump.mp3');
    lost_sound = new Audio('audio/game_over.mp3');

    constructor() {
        super().loadImage("img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.pepe_walks);
        this.loadImages(this.pepe_jumps);
        this.loadImages(this.pepe_dead);
        this.loadImages(this.pepe_hurt);
        this.loadImages(this.pepe_sleeps);
        this.loadImages(this.pepe_sleeps_long);
        this.applyGravity();
        this.animate();
    }

    /**
     * animates Character
     */
    animate() {
        setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
        setStoppableInterval(() => this.playCharacter(), 50);
    }

    /**
     * move character (left , right or jump)
     */
    moveCharacter() {
        this.walking_sound.pause();
        if (this.canMoveRight()) this.moveRight();
        if (this.canMoveLeft()) this.moveLeft();
        if (this.canJump()) this.jump();
        this.world.camera_x = -this.x + 100;
    }

    /**
     * Character moves right
     */
    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
    }

    /**
     * Character moves left
     */
    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
    }

    canJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }

    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }

    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0;
    }

    /**
     * checking the status of character and plays the animation
     */
    playCharacter() {
        if (this.isDead()) 
            this.characterIsDead();
         else if (this.isHurt()) 
            this.characterIsHurt();
         else if (this.isAboveGround()) 
            this.characterJumps();
         else if (this.dontPressKeyboard() && this.timer < 75) 
            this.characterSleeps();
         else if (this.dontPressKeyboard() && this.timer == 75) 
            this.playAnimation(this.pepe_sleeps_long);
         else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) 
            this.characterWalks();
        
    }

    /**
     * character deads animation
     */
    characterIsDead() {
        super.playAnimation(this.pepe_dead);
        this.dead_sound.volume = 0.8
        this.dead_sound.play();
        this.gameLost();
        this.stopSleep();
    }

    /**
     * character hurts animation
     */
    characterIsHurt() {
        super.playAnimation(this.pepe_hurt);
        this.stopSleep();
        this.hurt_sound.volume = 0.4
        this.hurt_sound.play();
    }

    /**
     * character jumps animation
     */
    characterJumps() {
        super.playAnimation(this.pepe_jumps);
        this.stopSleep();
    }

    /**
     * character sleeps animation
     */
    characterSleeps() {
        super.playAnimation(this.pepe_sleeps);
        this.timer++;
    }

    /**
     * character walks animation
     */
    characterWalks() {
        super.playAnimation(this.pepe_walks);
        this.stopSleep()
    }

    /**
     * stop the snoring sound and sleep
     */
    stopSleep() {
        this.timer = 0;
    }

    /**
     * 
     * @returns if keyboard dont press
     */
    dontPressKeyboard() {
        return !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT
    }


    /**
     * Character jumps
     */
    jump() {
        this.speedY = 30;
        this.jump_sound.volume = 0.2
        this.jump_sound.play();
    }

    /**
     * shows the lose screen
     */
    gameLost() {
        this.dead_sound.pause()
        setTimeout(() => {
            lostScreen();
            this.lost_sound.volume = 0.4
            this.lost_sound.play();
        }, 3000)
    }
}

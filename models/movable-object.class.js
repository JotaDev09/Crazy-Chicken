class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    groundPosition = 180;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };


    /**
     * apply gravity to the character and bottles
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    };

    /**
     * if Pepe or bottles are on the air, they come back to ground
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable object should always fall out of the canvas
            return true;
        } else {
            return this.y < this.groundPosition;
        }
    }

    /**
     * Character or enemies are colliding
     */
    isColliding(mo) {
        return (
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
    }

    /**
     * Character, enemies or bottles are hitting
     */
    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Character or enemies are hurting
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; //Difference in sec
        return timepassed < 1;
    }

    /**
     * Character or enemies are dead
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * animation of character and enemies when walking, jumping or hurting
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6; 0, Rest 0 // let i = 1 % 6; 0, Rest 1 ...
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }

    /**
     * Character moves to right
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Character or enemies move to left
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Character jumps
     */
    jump() {
        this.speedY = 30
    }
}
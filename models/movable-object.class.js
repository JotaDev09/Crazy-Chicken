class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    catchBottle = 0
    groundPosition = 180;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };


    //gravity
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    };


    //gravity back to floor
    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable object should always fall out of the canvas
            return true;
        } else {
            return this.y < this.groundPosition;
        }
    }


    // Pepe is Colliding chicken
    isColliding(mo) {
        return (this.x + this.width - this.offset.right) > mo.x + mo.offset.left &&
            this.x + this.offset.left < (mo.x + mo.width - mo.offset.right) &&
            (this.y + this.height - this.offset.bottom) > mo.y + mo.offset.top &&
            (this.y + this.offset.top) < (mo.y + mo.height - mo.offset.bottom);
    }
        /*return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }*/

    //chicken hit Pepe
    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /*//catch bottles
    catchBottle(obj) {
        console.log('bottle5')
        this.catchBottle = this.catchBottle + 1; console.log('bottle6')
        let index = this.world.level.bottles.indexOf(obj);
        this.world.level.bottles.splice(index, 1);
    }

    updateBottleBar() {
        let percentageOfBottles = this.amountOfBottles / numberOfBottles * 100;
        this.world.statusBarBottle.setPercentage(percentageOfBottles, this.world.statusBarBottle.IMAGES )
    }*/

    // Pepe is hurting
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; //Difference in sec

        return timepassed < 1;
    }


    //Pepe is dead
    isDead() {
        return this.energy == 0;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6; 0, Rest 0 // let i = 1 % 6; 0, Rest 1 ...
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
        
    }

    jump() {
        this.speedY = 30
    }
}
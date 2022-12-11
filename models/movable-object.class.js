class MovableObject extends DrawableObject{
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    //gravedad
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    };


    //volver a 
    isAboveGround() {
        return this.y < 180;
    }


    // character is Colliding chicken
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; //Difference in sec
        
        return timepassed < 1;
    }


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
        /*setInterval( () => {
            this.x += this.speed;  
          }, 1000 / 60);
        console.log('moving right');*/
    }

    moveLeft() {
        this.x -= this.speed;
        /*setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);*/
    }

    jump() {
        this.speedY = 30
    }
}
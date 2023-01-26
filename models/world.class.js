class World {

    character = new Character();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoins = new statusBarCoins();
    statusBarBottle = new statusBarBottle();
    statusBarBoss = new statusBarBoss();
    bottles = new Bottle();
    coins = new Coins()
    ThrowableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
       // this.bottleCollisions()
       
        setInterval(() => {
            this.pepeCollidingEnemy();
            this.checkThrowObjects();
            this.pepeCollidingEnemyFromAbove();
            this.bottleCollidingChickenBoss();
        }, 200)
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection); //console.log('bottle', keyboard)
            this.ThrowableObjects.push(bottle);

        }
    }

    pepeCollidingEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) &&
            enemy.alive == true) {
                console.log('pollo')
                this.character.hit(5);
                this.statusBar.setPercentage(this.character.energy)
            }
        });

    }


    pepeCollidingEnemyFromAbove() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && 
                this.character.isAboveGround()) {
                enemy.alive = false;
               /* playSound(this.chickenSound);*/
                setTimeout(() => {
                    this.removeEnemyFromArray(enemy);
                }, 1000);
            };
        }); 
    }

    removeEnemyFromArray(enemy) {
        let index = this.level.enemies.indexOf(enemy);
        this.level.enemies.splice(index, 1);
    }



    bottleCollidingChickenBoss() {
        // let throwableBottle = this.ThrowableObjects
         this.ThrowableObjects.forEach((bottle) => {
             if (this.endboss.isColliding(bottle)) {
                 console.log('hitboss')
                 this.endboss.hit(10);
                 this.statusBarBoss.setPercentage(this.endboss.energy)
             }
         });
     }

    /*bottleCollisions() {
        this.level.bottles.forEach((bottle) => {
            console.log('bottle')
            if (this.character.isColliding(bottle)) {
                console.log('bottle2')
                this.character.catchBottle(bottle);
                console.log('bottle3')
                this.character.updateBottleBar();
                console.log('bottle4')
            }
        });
    }*/

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed objects
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x, 0)

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addToMap(this.statusBarBoss);
        this.addObjectsToMap(this.ThrowableObjects);


        this.ctx.translate(-this.camera_x, 0);

        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        });

    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    };

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx)

        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
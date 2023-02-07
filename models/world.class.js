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
    bottleAmount = 0;
    coinsAmount = 0;

    throwAble = true;


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
        

        setInterval(() => {
            this.pepeCollidingEnemy();
            this.checkThrowObjects();
            this.pepeCollidingEnemyFromAbove();
            this.bottleCollidingChickenBoss();
            this.catchBottle();
            this.catchCoin();
        }, 200)
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.bottleAmount > 0 && this.throwAble) {
            setTimeout(() => {
                this.throwAble = true;
            }, 2000);
            this.throwBottle();
        }
    }

    throwBottle() {
        if (this.throwAble) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.bottleAmount -= 1;
            this.statusBarBottle.setPercentage(this.bottleAmount * 20);
            this.ThrowableObjects.push(bottle);
            this.throwAble = false
        }
    }

    pepeCollidingEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) &&
                enemy.alive == true) {
                //console.log('pollo')
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
                //console.log('hitboss')
                this.endboss.hit(10);
                this.statusBarBoss.setPercentage(this.endboss.energy)
            }
        });
    }


    catchBottle() {
        this.level.bottles.forEach((bottles) => {
            if (this.isCollidingObj(bottles)) {
                console.log('bottle')
                this.bottleAmount += 1;
                this.hideBottle(bottles);
                //this.collectBottle.play();
                this.statusBarBottle.setPercentage(this.bottleAmount * 10);
            }
        });
    }

    catchCoin() {
        this.level.coins.forEach((coins) => {
            if (this.isCollidingObj(coins)) {
                console.log('coins')
                this.coinsAmount += 1;
                this.hideCoins(coins);
                //this.collectBottle.play();
                this.statusBarCoins.setPercentage(this.coinsAmount * 10);
            }
        });
    }


    isCollidingObj(obj) {
        return this.character.isColliding(obj) &&
            obj.height != 0 &&
            obj.width != 0
    }


    hideBottle(bottles) {
        bottles.height = 0;
        bottles.width = 0;
    }

    hideCoins(coins) {
        coins.height = 0;
        coins.width = 0;
    }


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
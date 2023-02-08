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

    chickenHit_sound = new Audio('audio/chicken_hit.mp3');
    coin_sound = new Audio('audio/coin.mp3');
    bottle_sound = new Audio('audio/bottle.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * to fit models with world
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * the game is running
     */
    run() {
        setInterval(() => {
            this.allAreColliding()
            this.checkThrowObjects();
            this.catchObjects()
        }, 200)
    }

    /**
     * Charachter, enemies and objects are colliding
     */
    allAreColliding() {
        this.pepeCollidingEnemy();
        this.pepeCollidingEnemyFromAbove();
        this.bottleCollidingChickenBoss();
    }

    /**
     * to catch coins and bottles
     */
    catchObjects() {
        this.catchBottle();
        this.catchCoin();
    }

    /**
     * Character catch throwable objects
     */
    checkThrowObjects() {
        if (this.keyboard.D && this.bottleAmount > 0 && this.throwAble) {
            setTimeout(() => this.throwAble = true, 2000);
            this.throwBottle();
        }
    }

    /**
     * Character throws bottle
     */
    throwBottle() {
        if (this.throwAble) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.bottleAmount -= 1;
            this.statusBarBottle.setPercentage(this.bottleAmount * 20);
            this.ThrowableObjects.push(bottle);
            this.throwAble = false
        }
    }

    /**
     * character is colliding enemies
     */
    pepeCollidingEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) &&
                enemy.alive == true) {
                this.character.hit(5);
                this.statusBar.setPercentage(this.character.energy)
            }
        });
    }

    /**
     * Character is jumping and colliding enemies from above
     */
    pepeCollidingEnemyFromAbove() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) &&
                this.character.isAboveGround()) {
                enemy.alive = false;
                this.chickenHit_sound.play()
                setTimeout(() => this.removeEnemyFromArray(enemy), 1000);
            };
        });
    }

    /**
     * when enemie is dead, remove it from canvas
     */
    removeEnemyFromArray(enemy) {
        let index = this.level.enemies.indexOf(enemy);
        this.level.enemies.splice(index, 1);
    }

    /**
     * bottle is colliding Endboss
     */
    bottleCollidingChickenBoss() {
        this.ThrowableObjects.forEach((bottle) => {
            if (this.endboss.isColliding(bottle)) {
                this.endboss.hit(10);
                this.statusBarBoss.setPercentage(this.endboss.energy)
            }
        });
    }

    /**
     * Character catchs bottle
     */
    catchBottle() {
        this.level.bottles.forEach((bottles) => {
            if (this.isCollidingObj(bottles)) this.statusBottle(bottles)
        });
    }

    /**
     * status bar changes when charachter catchs bottle
     */
    statusBottle(bottles) {
        console.log('bottle')
        this.bottleAmount += 1;
        this.hideBottle(bottles);
        this.bottle_sound.volume = 1
        this.bottle_sound.play();
        this.statusBarBottle.setPercentage(this.bottleAmount * 10);
    }

    /**
     * Character catchs coins
     */
    catchCoin() {
        this.level.coins.forEach((coins) => {
            if (this.isCollidingObj(coins)) this.statusCoins(coins)
        });
    }

    /**
     * status bar changes when charachter catchs coins
     */
    statusCoins(coins) {
        console.log('coins')
        this.coinsAmount += 1;
        this.hideCoins(coins);
        this.coin_sound.volume = 0.4
        this.coin_sound.play();
        this.statusBarCoins.setPercentage(this.coinsAmount * 10);
    }

    /**
     * character is colliding with objects
     */
    isCollidingObj(obj) {
        return this.character.isColliding(obj) &&
            obj.height != 0 &&
            obj.width != 0
    }

    /**
     * Bottle hides when is catching
     */
    hideBottle(bottles) {
        bottles.height = 0;
        bottles.width = 0;
    }

    /**
     * Coin hides when is catching
     */
    hideCoins(coins) {
        coins.height = 0;
        coins.width = 0;
    }

    /**
     * draw all the objects, character, enemies, background etc. in the world
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);
        this.addScene();
        this.addMoveableObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.addStatusBar();

        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        });

    }

    /**
     * draw all the moveable objects
     */
    addMoveableObjects() {
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.ThrowableObjects);
    }

    /**
     * draw all the status bar
     */
    addStatusBar() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarBoss);
    }

    /**
     * draw all the background and clouds
     */
    addScene() {
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.backgroundObjects);
    }

    /**
     * add all the objects to the map
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    };

    /**
     * depends the directions, draw the image
     */
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
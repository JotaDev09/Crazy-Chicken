class Coins extends MovableObject {

    width = 100;
    height = 100;

    COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];


    constructor() {
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.COINS);
        this.animate();

        this.x = 300 + Math.random() * 5920;
        this.y = 40 + Math.random() * 250
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.COINS);
    }, 500);
    }
    
}
class Coins extends MovableObject {

    width = 100;
    height = 100;

    COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    offset = {
        top: 32,
        right: 32,
        bottom: 32,
        left: 32,
    };


    constructor() {
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.COINS);
        this.animate();
        this.x = 300 + Math.random() * 5920;
        this.y = 40 + Math.random() * 250
    }

    /**
     * animate coins
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.COINS);
        }, 500);
    }

}
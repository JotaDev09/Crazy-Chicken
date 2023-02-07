class Bottle extends MovableObject {

    width = 90;
    height = 80;
    y = 350

    BOTTLES = ['img/6_salsa_bottle/1_salsa_bottle_on_ground.png'];

    offset = {
        top: 10,
        right: 20,
        bottom: 5,
        left: 35,
      };

    constructor() {
        super();
        this.loadImage(this.BOTTLES);

        this.x = 300 + Math.random() * 5920
    }

    
}
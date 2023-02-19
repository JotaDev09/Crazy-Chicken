class Bottle extends MovableObject {
    height = 100;
    width = 80;
    y = 330;
    splash = false;
  
    offset = {
      top: 14,
      right: 15,
      bottom: 10,
      left: 35,
    };
  
    constructor() {
      super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
      this.x = 1000 + Math.random() * 5200;
    }
  }
  
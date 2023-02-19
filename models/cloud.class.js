class Cloud extends MovableObject {

    y = 20;
    height = 250;
    width = 500;
    speed = 0.15;

    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.x = x + Math.random() * 500; //Zahl zwischen 200 und 700
        this.animate();

    }

    /**
     * animate clouds
     */
    animate() {
        
        setInterval(() => {
            this.moveLeft();
            this.x -= this.speed;
        }, 1000 / 60);
    }
}
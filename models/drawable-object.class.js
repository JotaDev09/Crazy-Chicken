class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    percentage = 100;


    /**
     * this function creates an image and will mostly be called in the constructor function in every class
     * @param {path from the image } path 
     */
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image) <img id="image" src>
        this.img.src = path
    }   
        
    /**
     * will be called in the world.js file and draw the backgound and the objects
     * @param {context} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

     
    /**
     * 
     * @param {canvas.getContext('2d');} ctx 
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Piolin || this instanceof Bottle || this instanceof Endboss || this instanceof Coins) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, 
                this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

     /**
     * loads all images from an image array
     * @param {array with images} arr 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    //setPercentage(50)
    setPercentage(percentage) {
        this.percentage = percentage; // -> 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path]
    }



    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

    
}
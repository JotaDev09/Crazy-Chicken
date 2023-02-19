class DrawableObject {
    img;
    ImageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;
  
  
    /**
     * set img-path
     * @param {String} path
     */
    loadImage(path) {
      this.img = new Image(); // this.img = document.getElementbyId('image) <img id="image"> it's the same meaning
      this.img.src = path;
    }
  
    /**
     * draw image on canvas
     * @param {String} ctx
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      
    }
  
    /* function to show the border of objects
      drawFrame(ctx){
          if(this instanceof Character || this instanceof Chicken || this instanceof SmallChicken || this instanceof Coins || this instanceof Bottle || this instanceof Endboss || this instanceof ThrowableObject ){ // mit instance of kann man bestimmen welche Objekte den border haben
              ctx.beginPath();
              ctx.lineWidth = '5';
              ctx.strokeStyle = 'blue';
              ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left,
                this.height - this.offset.top - this.offset.bottom);
              ctx.stroke();
          }
      }
    */
  
    /*
     * @param {Array} arr - ['img/image1.png, 'img/image2.png', ...]
     */
    loadImages(arr) {
      arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        img.style = "transform: scaleX(-1)";
        this.ImageCache[path] = img;
      });
    }
  }
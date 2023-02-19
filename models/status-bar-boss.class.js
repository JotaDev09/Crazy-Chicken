class statusBarBoss extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/blue0.png',
        'img/7_statusbars/2_statusbar_endboss/blue20.png',
        'img/7_statusbars/2_statusbar_endboss/blue40.png',
        'img/7_statusbars/2_statusbar_endboss/blue60.png',
        'img/7_statusbars/2_statusbar_endboss/blue80.png',
        'img/7_statusbars/2_statusbar_endboss/blue100.png',
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = -12;
        this.width = 200;
        this.height = 60;
        this.setPercentage(30);
    }


    /**
     * set percentage of the status-bars
     */
    setPercentage(percentage) {
        this.percentage = percentage; // -> 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.ImageCache[path]
    }

    /**
     * percentage of status-bars and this animation
     */
    resolveImageIndex() {
        if (this.percentage == 30) {
            return 5;
        } else if (this.percentage == 25) {
            return 4;
        } else if (this.percentage == 20) {
            return 3;
        } else if (this.percentage == 10) {
            return 2;
        } else if (this.percentage == 5) {
            return 1;
        } else {
            return 0;
        }
    }

}

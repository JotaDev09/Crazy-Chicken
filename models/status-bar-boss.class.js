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
        this.x = 6870;
        this.y = -12;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

}

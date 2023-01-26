let level1;
function initlevel() {

     level1 = new Level(

        [
            new Chicken(), new Chicken(), new Chicken(), new Chicken(), new Chicken(),
            new Chicken(), new Chicken(), new Chicken(), new Chicken(), new Chicken(),
            new Piolin(), new Piolin(), new Piolin(), new Piolin(), new Piolin(),
            new Piolin(), new Piolin(), new Piolin(), new Piolin(), new Piolin(),
            new Endboss(),
        ],
        [
            new Cloud('img/5_background/layers/4_clouds/1.png', 0),
            new Cloud('img/5_background/layers/4_clouds/2.png', 350),

            new Cloud('img/5_background/layers/4_clouds/1.png', 720),

            new Cloud('img/5_background/layers/4_clouds/2.png', 350 * 3),

            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 3),
            new Cloud('img/5_background/layers/4_clouds/2.png', 350 * 4),

            new Cloud('img/5_background/layers/4_clouds/2.png', 350 * 5),

            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 5),

            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 6),
            new Cloud('img/5_background/layers/4_clouds/2.png', 350 * 7),

            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 7),
            new Cloud('img/5_background/layers/4_clouds/2.png', 350 * 8),

            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 8),
            new Cloud('img/5_background/layers/4_clouds/2.png', 350 * 9),

            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 9),
        ],
        [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 6),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 7),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 8),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 9),
        ],

        [
            new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(),
            new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(),
            new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(),
            new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(),
        ],

        [
            new Coins(), new Coins(), new Coins(), new Coins(), new Coins(),
            new Coins(), new Coins(), new Coins(), new Coins(), new Coins(),
            new Coins(), new Coins(), new Coins(), new Coins(), new Coins(),
            new Coins(), new Coins(), new Coins(), new Coins(), new Coins()
        ]



    );
}
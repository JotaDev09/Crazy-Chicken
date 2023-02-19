class Endboss extends MovableObject {
    speed = 18.5;
    height = 400;
    width = 250;
    y = 50;
    energy = 30;
    bossHit_sound = new Audio('audio/endboss_hit.mp3');
    win_sound = new Audio("audio/win.mp3");
  
    offset = {
      top: 60,
      right: 20,
      bottom: 15,
      left: 20,
    };
  
    endboss_alert = [
      "img/4_enemie_boss_chicken/2_alert/G5.png",
      "img/4_enemie_boss_chicken/2_alert/G6.png",
      "img/4_enemie_boss_chicken/2_alert/G7.png",
      "img/4_enemie_boss_chicken/2_alert/G8.png",
      "img/4_enemie_boss_chicken/2_alert/G9.png",
      "img/4_enemie_boss_chicken/2_alert/G10.png",
      "img/4_enemie_boss_chicken/2_alert/G11.png",
      "img/4_enemie_boss_chicken/2_alert/G12.png",
    ];
  
    endboss_walks = [
      "img/4_enemie_boss_chicken/1_walk/G1.png",
      "img/4_enemie_boss_chicken/1_walk/G2.png",
      "img/4_enemie_boss_chicken/1_walk/G3.png",
      "img/4_enemie_boss_chicken/1_walk/G4.png",
    ];
  
    endboss_hurt = [
      "img/4_enemie_boss_chicken/4_hurt/G21.png",
      "img/4_enemie_boss_chicken/4_hurt/G22.png",
      "img/4_enemie_boss_chicken/4_hurt/G23.png",
    ];
  
    endboss_dead = [
      "img/4_enemie_boss_chicken/5_dead/G24.png",
      "img/4_enemie_boss_chicken/5_dead/G25.png",
      "img/4_enemie_boss_chicken/5_dead/G26.png",
    ];
  
    constructor() {
      super().loadImage(this.endboss_alert[0]);
      this.loadImages(this.endboss_hurt);
      this.loadImages(this.endboss_alert);
      this.loadImages(this.endboss_walks);
      this.loadImages(this.endboss_dead);
      this.x = 6800;
      this.animate();
    }
  
    /**
     * animates chicken
     */
    animate() {
      setStoppableInterval(() => this.playAnimation(this.endboss_alert), 200);
      setStoppableInterval(() => this.playAnimationEnboss(), 150);
    }
  
    /**
     * checking the status of Endboss and plays the animation
     */
    playAnimationEnboss() {
      if (this.isDead() && this.y < 900) {
        this.endbossDying();
      } else if (this.y > 900) {
        this.showEndscreen();
        stopInterval();
      } else if (this.isHurt()) {
        this.playAnimation(this.endboss_hurt);
        this.bossHit_sound.play();
      } else if (this.energy < 20) {
        this.EndbossAnimate();
      }
    }
  
    /**
     * endboss move left 
     */
    EndbossAnimate() {
      this.playAnimation(this.endboss_walks);
      this.moveLeft();
    }
  
    /**
     * endboss dying animation
     */
    endbossDying() {
      this.playAnimation(this.endboss_dead);
      this.endbossFalling();
    }
  
    /**
     * show the endscreen if you won
     */
    showEndscreen() {
      clearInterval(this.endbossFalling());
      this.gameWon();
    }
  
    /**
     * Endboss falling down
     */
    endbossFalling() {
      setInterval(() => {
        this.y++;
      }, 15);
    }
  
    /**
     * Endboss is dead, Pepe wins
     */
    gameWon() {
        setTimeout(() => {
            winScreen();
            this.win_sound.volume = 0.4;
            this.win_sound.play();
        }, 3000)
    }
  }
  
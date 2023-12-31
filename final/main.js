import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Background } from "./background.js";
import { ClimbingEnemy, FlyingEnemy, GroundEnemy } from "./enemies.js";

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.groundMargin = 80;
      this.speed = 0;
      this.maxSpeed = 4;
      this.background = new Background(this);
      this.player = new Player(this);
      this.input = new InputHandler();
      this.enemies = [];
      this.enemyTimer = 0;
    }
    update(deltaTime) {
      this.background.update();
      this.player.update(this.input.keys, deltaTime);
      // handleEnemies
    }
    draw(context) {
      this.background.draw(context);
      this.player.draw(context);
    }
    addEnemy() {
      this.enemies.push(new FlyingEnemy(this))
      // new FlyingEnemy(this), new GroundEnemy(this), new ClimbingEnemy()
    }
  }

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate(0);
});
window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 720;

  class InputHandler {
    constructor() {
      this.keys = [];
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown' && this.keys.indexOf(e.key) === -1) {
          this.keys.push(e.key);
        }
        console.log(e.key, this.keys); // 4:53:50
      });
    }
  }

  class Player  {

  }

  class Bakcground {
    
  }

  class Enemy {

  }

  function handleEnemies() {

  }

  function displayStatusText() {

  }

  const input = new InputHandler();

  function animate() {

  }
});
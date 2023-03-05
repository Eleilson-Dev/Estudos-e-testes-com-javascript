let canvas, ctx, w, h, meteors = [];

function init() {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');
    resizeReset();
    for(let b = 0; b < 2; b++) {
        meteors.push(new Meteor());
    }
    animationLoop();
}

function resizeReset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

function animationLoop() {
    ctx.clearRect(0, 0, w, h);
    drawScene();
    requestAnimationFrame(animationLoop);
}

function drawScene() {
    meteors.map((meteor) => {
      meteor.update();
      meteor.draw();
    });
}

class Meteor {
    constructor() {
        this.x = 150;
        this.y = 150;
        this.size = 1000;
        this.reset();
    }
    reset() {
      this.x = Math.random() * w + 300; 
      this.y = -100;
      this.size = Math.random() * 2 + 0.5;
      this.speed = (Math.random() + 0.5) * 7;
    }
    draw() {
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, .1)";
      ctx.lineCap = "round";
      ctx.shadowColor = "rgb(0, 230, 250)";
      ctx.shadowBlur = 8;
      for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.moveTo(this.x , this.y);
          ctx.lineWidth = this.size;
          ctx.lineTo(this.x + 10 * (i + 1), this.y - 8 * (i + 1));
          ctx.closePath();
          ctx.stroke();
        }
      ctx.restore();
    }
    update() {
      this.x -= this.speed;
      this.y += this.speed;
      if (this.y >= h + 100) {
        this.reset();
      }
    }
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);
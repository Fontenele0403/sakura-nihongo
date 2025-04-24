// Sakura.js - Efeito de pétalas de cerejeira caindo

const canvas = document.getElementById('sakura');
const ctx = canvas.getContext('2d');
let width, height;
let petals = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.size = 10 + Math.random() * 10;
    this.speedY = 1 + Math.random() * 2;
    this.speedX = Math.random() * 1 - 0.5;
    this.opacity = 0.5 + Math.random() * 0.5;
    this.rotation = Math.random() * Math.PI;
    this.rotationSpeed = Math.random() * 0.02 - 0.01;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotationSpeed;

    if (this.y > height || this.x < -20 || this.x > width + 20) {
      this.reset();
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = `rgba(255, 182, 193, ${this.opacity})`; // light pink
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 0.6, this.size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 50; i++) {
  petals.push(new Petal());
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (const petal of petals) {
    petal.update();
    petal.draw();
  }
  requestAnimationFrame(animate);
}

animate();

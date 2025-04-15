const canvas = document.getElementById('flower-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flowers = [];
const flowerImage = new Image();
flowerImage.src = '../image/floral-leaf/floral-leaf-4.png';

class Flower {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.size = Math.random() * 20 + 20;
    this.speed = Math.random() * 2 + 1;
    this.angle = Math.random() * 2 * Math.PI;
    this.spin = (Math.random() - 0.5) * 0.1;
  }

  update() {
    this.y += this.speed;
    this.angle += this.spin;
    if (this.y > canvas.height) {
      this.y = Math.random() * -100;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(flowerImage, -this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

for (let i = 0; i < 30; i++) {
  flowers.push(new Flower());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  flowers.forEach((flower) => {
    flower.update();
    flower.draw();
  });
  requestAnimationFrame(animate);
}

flowerImage.onload = animate;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

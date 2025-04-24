const canvas = document.getElementById('sakura');
const ctx = canvas.getContext('2d');
let petals = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Petal {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.radius = Math.random() * 4 + 2;
    this.speedY = Math.random() * 1 + 0.5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    if (this.y > canvas.height) {
      this.y = -10;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 182, 193, ${this.opacity})`;
    ctx.fill();
  }
}

function initPetals() {
  for (let i = 0; i < 100; i++) {
    petals.push(new Petal());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach(petal => {
    petal.update();
    petal.draw();
  });
  requestAnimationFrame(animate);
}

initPetals();
animate();

<script>
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("mostrar");
    } else {
      header.classList.remove("mostrar");
    }
  });

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("ativo");
  });

function toggleMenu() {
  const menu = document.getElementById("perfilMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function (e) {
  const perfil = document.querySelector(".perfil-container");
  if (!perfil.contains(e.target)) {
    document.getElementById("perfilMenu").style.display = "none";
  }
});

</script>


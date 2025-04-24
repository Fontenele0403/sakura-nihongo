// Inicializa o Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyPfO2z7oHVozMEMjiMn5WZXCcTVRkx3k",
  authDomain: "sakura-nihongo.firebaseapp.com",
  projectId: "sakura-nihongo",
  storageBucket: "sakura-nihongo.appspot.com", // corrigido: ".app" para ".com"
  messagingSenderId: "958897586137",
  appId: "1:958897586137:web:57ca207fbc7b7e3845e3c8",
  measurementId: "G-HBYT7CNCJ9"
};

firebase.initializeApp(firebaseConfig);

// Autenticação com Google
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function loginGoogle() {
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert(`Bem-vindo(a), ${user.displayName}`);
      document.querySelector(".perfil-bolinha img").src = user.photoURL;
    })
    .catch((error) => {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login com o Google.");
    });
}

function logout() {
  auth.signOut()
    .then(() => {
      alert("Você saiu da conta.");
      document.querySelector(".perfil-bolinha img").src = "img/perfil.jpg";
    })
    .catch((error) => {
      console.error("Erro ao sair:", error);
    });
}

// Alterna menu de perfil
function toggleMenu() {
  const menu = document.getElementById("perfilMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Fecha menu se clicar fora
document.addEventListener("click", function (e) {
  const perfil = document.querySelector(".perfil-container");
  if (!perfil.contains(e.target)) {
    document.getElementById("perfilMenu").style.display = "none";
  }
});

// Mostrar header ao rolar
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("mostrar");
  } else {
    header.classList.remove("mostrar");
  }
});

// Menu hamburguer
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("mostrar");
});

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyPfO2z7oHVozMEMjiMn5WZXCcTVRkx3k",
  authDomain: "sakura-nihongo.firebaseapp.com",
  projectId: "sakura-nihongo",
  storageBucket: "sakura-nihongo.firebasestorage.app",
  messagingSenderId: "958897586137",
  appId: "1:958897586137:web:57ca207fbc7b7e3845e3c8",
  measurementId: "G-HBYT7CNCJ9"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Função de login com Google
function loginGoogle() {
  console.log("Tentando fazer login com Google...");
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(`Usuário logado: ${user.displayName}`);
      alert(`Bem-vindo(a), ${user.displayName}`);
      document.querySelector(".perfil-bolinha img").src = user.photoURL;
    })
    .catch((error) => {
      console.error("Erro ao fazer login:", error);
    });
}

// Função de logout
function logout() {
  auth.signOut().then(() => {
    alert("Você saiu da conta.");
    document.querySelector(".perfil-bolinha img").src = "img/perfil.jpg";
  });
}

// Função para alternar o menu de perfil
function toggleMenu() {
  const menu = document.getElementById("perfilMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Fechar o menu ao clicar fora
document.addEventListener("click", function (e) {
  const perfil = document.querySelector(".perfil-container");
  if (!perfil.contains(e.target)) {
    document.getElementById("perfilMenu").style.display = "none";
  }
});

// Verifique se o clique no botão de login está funcionando
document.querySelector('.perfil-menu button').addEventListener('click', function() {
  console.log('Clique no botão de login registrado!');
});

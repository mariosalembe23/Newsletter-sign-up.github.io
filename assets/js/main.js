window.addEventListener("load", () => {
  document.getElementById("form-subscribe").addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

  function ChangeImage() {
    const imagem = document.getElementById("image");
    
    // Obtém o tamanho da tela
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (larguraTela <= 770) {
      // Troca a imagem para a versão móvel
      imagem.src = "./assets/images/illustration-sign-up-mobile.svg";
      imagem.alt = "Nova Imagem Mobile";
    } else {
      // Volta para a imagem original
      imagem.src = "./assets/images/illustration-sign-up-desktop.svg";
      imagem.alt = "Imagem Original";
    }
  }

  // Verifica o tamanho da tela quando ocorrer uma alteração de redimensionamento
  window.addEventListener('resize', ChangeImage);

  // Executa a função no carregamento inicial
  ChangeImage();

document.getElementById("button").addEventListener("click", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = document.getElementById("email");
  const messageAlert = document.getElementById("alert");
  function EmailVerify(email) {
    // REGULAR EXPRESSION TO EMAIL
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // VERIFY IF THE EMAIL IS VALID
    if (regex.test(email)) {
      return true; // 
    } else {
      return false; // O email é inválido
    }
  }

  if (EmailVerify(email.value)) {
    messageAlert.textContent = "";
    email.classList.remove("bordered-Red");
    window.location.href = "greetings.html"
  } else {
    messageAlert.textContent = "Valid email Required";
    email.classList.add("bordered-Red");
  }

  
});


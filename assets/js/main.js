window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-subscribe").addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

document.getElementById("button").addEventListener("click", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = document.getElementById("email");
  const messageAlert = document.getElementById("alert");
  function EmailVerify(email) {
    // REGULAR EXPRESSION TO EMAIL
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // VERIFY IF THE EMAIL IS VALID
    if (regex.test(email)) {
      return true; // O email é válido
    } else {
      return false; // O email é inválido
    }
  }

  if (EmailVerify(email.value)) {
    messageAlert.textContent = "";
    email.classList.remove("bordered-Red");
  } else {
    messageAlert.textContent = "Valid email Required";
    email.classList.add("bordered-Red");
  }
});

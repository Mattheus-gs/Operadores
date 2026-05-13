// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {

  // BOTÃO DE TEMA
  const themeBtn = document.getElementById("themeBtn");

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // Troca o texto do botão
    if(document.body.classList.contains("light-mode")){
      themeBtn.textContent = "Tema Escuro";
    } else {
      themeBtn.textContent = "Tema Claro";
    }

  });



  // SCROLL SUAVE
  const links = document.querySelectorAll(".menu a");

  links.forEach(link => {

    link.addEventListener("click", e => {

      e.preventDefault();

      const id = link.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth"
      });

    });

  });



  // ANIMAÇÃO DOS CARDS
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";

  });

  window.addEventListener("scroll", () => {

    cards.forEach(card => {

      const top = card.getBoundingClientRect().top;

      if(top < window.innerHeight - 100){
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }

    });

  });

});
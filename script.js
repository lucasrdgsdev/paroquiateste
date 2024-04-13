
  AOS.init();

  const btnMobile = document.getElementById('btn-mobile');
    function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
    nav.classList.toggle('active');
  const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
document.querySelectorAll('#menu a').forEach(item => {
    item.addEventListener('click', () => {
    const nav = document.getElementById('nav');
        nav.classList.remove('active');
        btnMobile.setAttribute('aria-expanded', false);
        btnMobile.setAttribute('aria-label', 'Abrir Menu');
    });
});
window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    var scrollTop = window.scrollY;
  
    if (scrollTop > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

  const openModalButtons = document.querySelectorAll(".open-modal, .open-modal-secretaria, .open-modal-secretaria2, .open-modal-secretaria3, .open-modal-secretaria4, .open-modal-secretaria5");
  const closeModalButtons = document.querySelectorAll("#close-modal, #close-modal-secretaria, #close-modal-secretaria2, #close-modal-secretaria3, #close-modal-secretaria4, #close-modal-secretaria5");
  const modal = document.querySelector("#modal");
  const modalSecretaria = document.querySelector("#modal-secretaria");
  const modalSecretaria2 = document.querySelector("#modal-secretaria2");
  const modalSecretaria3 = document.querySelector("#modal-secretaria3");
  const modalSecretaria4 = document.querySelector("#modal-secretaria4");
  const modalSecretaria5 = document.querySelector("#modal-secretaria5");
  const fade = document.querySelector("#fade");
  const fadeSecretaria = document.querySelector("#fade-secretaria");
  const fadeSecretaria2 = document.querySelector("#fade-secretaria2");
  const fadeSecretaria3 = document.querySelector("#fade-secretaria3");
  const fadeSecretaria4 = document.querySelector("#fade-secretaria4");
  const fadeSecretaria5 = document.querySelector("#fade-secretaria5");
  
  const toggleModal = (modal, fade) => {
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
  };
  
openModalButtons.forEach((button) => {
button.addEventListener("click", () => {
    if (button.classList.contains('open-modal')) {
    toggleModal(modal, fade);
    const campaignTitle = button.parentElement.querySelector("strong").textContent;
    document.querySelector(".modal-header h2").textContent = campaignTitle;
}   else if (button.classList.contains('open-modal-secretaria')) {
    toggleModal(modalSecretaria, fadeSecretaria);
}   else if (button.classList.contains('open-modal-secretaria2')) {
    toggleModal(modalSecretaria2, fadeSecretaria2);
}   else if (button.classList.contains('open-modal-secretaria3')) {
    toggleModal(modalSecretaria3, fadeSecretaria3);
}   else if (button.classList.contains('open-modal-secretaria4')) {
    toggleModal(modalSecretaria4, fadeSecretaria4);
}   else if (button.classList.contains('open-modal-secretaria5')) {
    toggleModal(modalSecretaria5, fadeSecretaria5);
}
    });
  });
  
closeModalButtons.forEach((button) => {
button.addEventListener("click", () => {
          if (button.id === 'close-modal') {
              toggleModal(modal, fade);
          } else if (button.id === 'close-modal-secretaria') {
              toggleModal(modalSecretaria, fadeSecretaria);
          } else if (button.id === 'close-modal-secretaria2') {
              toggleModal(modalSecretaria2, fadeSecretaria2);
          } else if (button.id === 'close-modal-secretaria3') {
              toggleModal(modalSecretaria3, fadeSecretaria3);
          } else if (button.id === 'close-modal-secretaria4') {
              toggleModal(modalSecretaria4, fadeSecretaria4);
          } else if (button.id === 'close-modal-secretaria5') {
              toggleModal(modalSecretaria5, fadeSecretaria5);
          }
      });
  });
  
  fade.addEventListener("click", () => {
      toggleModal(modal, fade);
  });
  
  fadeSecretaria.addEventListener("click", () => {
      toggleModal(modalSecretaria, fadeSecretaria);
  });
  
  fadeSecretaria2.addEventListener("click", () => {
      toggleModal(modalSecretaria2, fadeSecretaria2);
  });
  
  fadeSecretaria3.addEventListener("click", () => {
      toggleModal(modalSecretaria3, fadeSecretaria3);
  });
  
  fadeSecretaria4.addEventListener("click", () => {
      toggleModal(modalSecretaria4, fadeSecretaria4);
  });
  
  fadeSecretaria5.addEventListener("click", () => {
      toggleModal(modalSecretaria5, fadeSecretaria5);
  });
  
    const copyTextButton = document.getElementById("copy-button");
    const copyText = document.getElementById("copy-text");
    const copySuccessMsg = document.querySelector('.copy-success-msg');
  
copyTextButton.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
textArea.value = copyText.textContent;
document.body.appendChild(textArea);
textArea.select();
document.execCommand("copy");
document.body.removeChild(textArea);
copySuccessMsg.classList.toggle('hide');


  });


  

  

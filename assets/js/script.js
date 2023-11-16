// Hamburger

let hamburger = document.querySelector('.hamburger-menu')
let navCollapse = document.querySelector('.nav__collapse')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navCollapse.classList.toggle('active')
});

// Language dropdown

let lang = document.querySelector('.lang')
let langDropDown = document.querySelector('.lang__dropdown')
lang.addEventListener('click', () => {
  langDropDown.classList.toggle('active')
});

// Open Modal

document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";

  document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target === this) {
      closeModal();
    }
  });
});

document.getElementById("closeModal").addEventListener("click", closeModal);

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modal").removeEventListener("click", closeModal);
}

// Swiper

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    980: {
      slidesPerView: 3,
      spaceBetween: 35,
    }
  },
});
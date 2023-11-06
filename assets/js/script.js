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

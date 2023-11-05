let hamburger = document.querySelector('.hamburger-menu')
let navCollapse = document.querySelector('.nav__collapse')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navCollapse.classList.toggle('active')
});

let lang = document.querySelector('.lang')
let langDropDown = document.querySelector('.lang__dropdown')
lang.addEventListener('click', () => {
  langDropDown.classList.toggle('active')
});
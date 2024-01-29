// js para manejar el menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.getElementById('burger-icon');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerIcon.addEventListener('click', function () {
    this.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
});

// app.js
// Add your JavaScript code here if needed
document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  burgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
});

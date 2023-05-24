const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  // Toggle navigation menu on burger icon click
  navLinks.classList.toggle('nav-active');
  // Toggle burger icon animation
  burger.classList.toggle('toggle');
});
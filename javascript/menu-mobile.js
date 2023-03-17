let scrollBlock = true;
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');
const liItems = document.querySelectorAll('.ul-item');

function toggleMenu() {
  document.body.style.overflow = scrollBlock ? "hidden" : "initial";
  menuToggle.classList.toggle('-open', scrollBlock);
  headerNav.classList.toggle('-open', scrollBlock);
  scrollBlock = !scrollBlock;
};

menuToggle.addEventListener('click', toggleMenu)

liItems.forEach(li => {
  li.addEventListener('click', toggleMenu)
});
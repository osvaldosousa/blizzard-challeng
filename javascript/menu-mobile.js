let scrollBlock = true;
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = scrollBlock ? "hidden" : "initial";
  menuToggle.classList.toggle('-open', scrollBlock);
  headerNav.classList.toggle('-open', scrollBlock);
  scrollBlock = !scrollBlock;
})
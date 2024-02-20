const headerNav = document.querySelector('.header__nav');
const headerBurger = headerNav.querySelector('.header__burger');
const mobileNav = headerNav.querySelector('.mobile-menu');
const buttonCloseMobileNav = mobileNav.querySelector('.mobile-menu__close');

headerBurger.addEventListener('click', () => {
  mobileNav.classList.add('open');
});

buttonCloseMobileNav.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});

function onHeaderSticky() {
  if (window.pageYOffset > 40) {
    headerNav.classList.add('sticky');
  } else {
    headerNav.classList.remove('sticky');
  }
}

window.addEventListener('scroll', onHeaderSticky);

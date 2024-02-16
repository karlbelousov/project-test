const cookies = document.querySelector('.cookies');
const buttonsCookies = cookies.querySelectorAll('button');
const modalOpenButtons = document.querySelectorAll('#modal-auth');
const modalAuth = document.querySelector('.modal-auth');
const modalAuthCancel = modalAuth.querySelector('.modal-auth__cancel');
const success = document.querySelector('.success');
const successButtons = success.querySelectorAll('button');
const inputPhone = modalAuth.querySelector('#phone-number');
const buttonSubmit = modalAuth.querySelector('.modal-auth__button');
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

function onCloseCookies() {
  cookies.classList.add('hidden');
}

function openModalAuth() {
  modalAuth.classList.remove('hidden');
}

function closeModalAuth() {
  modalAuth.classList.add('hidden');
}

function closeSuccess() {
  success.classList.add('hidden');
}

buttonsCookies.forEach((button) => {
  button.addEventListener('click', onCloseCookies);
});

modalOpenButtons.forEach((button) => {
  button.addEventListener('click', openModalAuth);
});

modalAuthCancel.addEventListener('click', closeModalAuth);

successButtons.forEach((button) => {
  button.addEventListener('click', closeSuccess);
});

const phoneMask = new IMask(inputPhone, {
  mask: '+{7} (000) 000-00-00',
});

function onInputPhone() {
  if (phoneMask.masked.isComplete) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
}

inputPhone.addEventListener('oninput', onInputPhone);

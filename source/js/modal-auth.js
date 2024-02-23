import { openSucces } from './success.js';

const modalOpenButtons = document.querySelectorAll('.open-modal-auth');
const modalAuth = document.querySelector('.modal-auth');
const modalAuthCancel = modalAuth.querySelector('.modal-auth__cancel');
const modalAuthForm = modalAuth.querySelector('.modal-auth__form');
const phoneInput = modalAuthForm.querySelector('#phone-number');

const phoneMask = new IMask(phoneInput, {
  mask: '+{7}(000)000-00-00',
});

function openModalAuth() {
  modalAuth.classList.remove('hidden');
}

function closeModalAuth() {
  modalAuth.classList.add('hidden');
  modalAuthForm.reset();
}

function onKeyDownUp(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalAuth();
  }
}


function onSubmitForm(evt) {
  evt.preventDefault();
  modalAuthForm.reset();
  closeModalAuth();
  setTimeout(openSucces, 3000);
}

modalOpenButtons.forEach((button) => {
  button.addEventListener('click', openModalAuth);
});

modalAuthCancel.addEventListener('click', closeModalAuth);
modalAuthForm.addEventListener('submit', onSubmitForm);
document.addEventListener('keydown', onKeyDownUp);

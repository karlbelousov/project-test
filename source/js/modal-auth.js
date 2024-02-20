import { openSucces } from './success.js';

const modalOpenButtons = document.querySelectorAll('.open-modal-auth');
const modalAuth = document.querySelector('.modal-auth');
const modalAuthCancel = modalAuth.querySelector('.modal-auth__cancel');
const modalAuthForm = modalAuth.querySelector('.modal-auth__form');
const nameInput = modalAuthForm.querySelector('#name');
const nameEmail = modalAuthForm.querySelector('#email');
const phoneInput = modalAuthForm.querySelector('#phone-number');
const formSubmitButton = modalAuthForm.querySelector('.modal-auth__button');

const phoneMask = new IMask(phoneInput, {
  mask: '+{7}(000)000-00-00',
});

const pristine = new Pristine(modalAuthForm, {
  classTo: 'modal-auth__group',
  errorClass: 'modal-auth__group--invalid',
  errorTextParent: 'modal-auth__group',
  errorTextClass: 'modal-auth__error-text',
});

function openModalAuth() {
  modalAuth.classList.remove('hidden');
  formSubmitButton.disabled = true;
}

function closeModalAuth() {
  modalAuth.classList.add('hidden');
  modalAuthForm.reset();
  pristine.reset();
}

function onKeyDownUp(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalAuth();
  }
}

function onInput() {
  const isValid = pristine.validate();
  if (isValid && phoneMask.masked.isComplete) {
    formSubmitButton.disabled = false;
  } else {
    formSubmitButton.disabled = true;
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
nameEmail.addEventListener('input', onInput);
nameInput.addEventListener('input', onInput);
phoneInput.addEventListener('input', onInput);

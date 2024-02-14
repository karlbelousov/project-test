const cookies = document.querySelector('.cookies');
const buttonsCookies = cookies.querySelectorAll('button');
const modalOpenButtons = document.querySelectorAll('.button');
const modalAuth = document.querySelector('.modal-auth');
const modalAuthCancel = modalAuth.querySelector('.modal-auth__cancel');
const success = document.querySelector('.success');
const successButtons = success.querySelectorAll('button');

function onCloseCookies() {
  cookies.classList.add('hidden');
}

function openModalAuth(evt) {
  if (evt.target.closest('.cookies__button')) {
    return;
  }
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

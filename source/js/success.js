const success = document.querySelector('.success');
const successButtons = success.querySelectorAll('button');

function openSucces() {
  success.classList.remove('hidden');
}

function closeSuccess() {
  success.classList.add('hidden');
}

function onKeyDownUp(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccess();
  }
}

successButtons.forEach((button) => {
  button.addEventListener('click', closeSuccess);
});

document.addEventListener('keydown', onKeyDownUp);

export {openSucces};

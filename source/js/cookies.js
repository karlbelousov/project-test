const cookies = document.querySelector('.cookies');
const buttonsCookies = cookies.querySelectorAll('button');

function onCloseCookies() {
  cookies.classList.add('hidden');
}

function onKeyDownUp(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onCloseCookies();
  }
}

buttonsCookies.forEach((button) => {
  button.addEventListener('click', onCloseCookies);
});

document.addEventListener('keydown', onKeyDownUp);

const success=document.querySelector(".success"),successButtons=success.querySelectorAll("button");function openSucces(){success.classList.remove("hidden")}function closeSuccess(){success.classList.add("hidden")}function onKeyDownUp(e){"Escape"===e.key&&(e.preventDefault(),closeSuccess())}successButtons.forEach((e=>{e.addEventListener("click",closeSuccess)})),document.addEventListener("keydown",onKeyDownUp);export{openSucces};
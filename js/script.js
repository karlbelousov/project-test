const cookies=document.querySelector(".cookies"),buttonsCookies=cookies.querySelectorAll("button"),modalOpenButtons=document.querySelectorAll(".button"),modalAuth=document.querySelector(".modal-auth"),modalAuthCancel=modalAuth.querySelector(".modal-auth__cancel"),success=document.querySelector(".success"),successButtons=success.querySelectorAll("button");function onCloseCookies(){cookies.classList.add("hidden")}function openModalAuth(e){e.target.closest(".cookies__button")||modalAuth.classList.remove("hidden")}function closeModalAuth(){modalAuth.classList.add("hidden")}function closeSuccess(){success.classList.add("hidden")}buttonsCookies.forEach((e=>{e.addEventListener("click",onCloseCookies)})),modalOpenButtons.forEach((e=>{e.addEventListener("click",openModalAuth)})),modalAuthCancel.addEventListener("click",closeModalAuth),successButtons.forEach((e=>{e.addEventListener("click",closeSuccess)}));
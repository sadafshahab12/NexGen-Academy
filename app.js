let navMenu = document.querySelector(".logo i");
let navLinks = document.querySelector(".nav-links")
const changeIcon = ()=>{
    navMenu.classList.toggle("fa-xmark");
    if (navLinks.style.left === "0%") {
        navLinks.style.left = "-100%";
      } else {
        navLinks.style.left = "0%";
      }
}
navMenu.addEventListener("click" , changeIcon)
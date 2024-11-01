let navMenu = document.querySelector(".logo i");
let navLinks = document.querySelector(".nav-links");
const changeIcon = () => {
  navMenu.classList.toggle("fa-xmark");
  if (navLinks.style.left === "0%") {
    navLinks.style.left = "-100%";
  } else {
    navLinks.style.left = "0%";
  }
};
navMenu.addEventListener("click", changeIcon);

let navItems = document.querySelectorAll(".nav-items");
navItems.forEach((nav) => {
  nav.addEventListener("click", () => {
    navLinks.style.left = "-100%";
    navMenu.classList.remove("fa-xmark")
    navMenu.classList.add("fa-bars");
    console.log("done")
  });
});

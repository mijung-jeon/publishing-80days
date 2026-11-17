const menuButton = document.querySelector(".menu-toggle");
const menuNav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  menuNav.classList.toggle("is-open");
});

const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("is-open");
  });
});

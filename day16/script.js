const menuButton = document.querySelector(".menu-toggle");
const menuNav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  menuNav.classList.toggle("is-open");

  const isOpen = menuNav.classList.contains("is-open");

  const status = isOpen ? "메뉴 닫기" : "메뉴 열기";
  menuButton.setAttribute("aria-label", status);
  menuButton.setAttribute("aria-expanded", isOpen);
});

// 메뉴클릭시 gnb 닫기
const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", false);
    menuButton.setAttribute("aria-label", "메뉴 열기");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuNav.classList.contains("is-open")) {
    menuNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", false);
    menuButton.setAttribute("aria-label", "메뉴 열기");
    menuButton.focus();
  }
});

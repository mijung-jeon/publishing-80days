const menuButton = document.querySelector(".menu-toggle");
const menuNav = document.querySelector("nav");

function updateMenuButton(isOpen) {
  const status = isOpen ? "메뉴 닫기" : "메뉴 열기";
  menuButton.setAttribute("aria-label", status);
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "×" : "☰";
}

menuButton.addEventListener("click", () => {
  menuNav.classList.toggle("is-open");

  const isOpen = menuNav.classList.contains("is-open");

  updateMenuButton(isOpen);
});

// 메뉴클릭시 gnb 닫기
function closeMenu() {
  menuNav.classList.remove("is-open");
  updateMenuButton(false);
}

const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuNav.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});

function showMessage(message) {
  console.log(message);
}

showMessage("첫 번째 메세지");
showMessage("두 번째 메세지");

function showUserMessage(name, message) {
  console.log(name + " : " + message);
}

showUserMessage("홍길동", "안녕하세요");
showUserMessage("김철수", "반갑습니다");

function getUserMessage(name, message) {
  return name + ":" + message;
}

const result = getUserMessage("이영희", "안녕하세요?");
console.log(result);

function printMessage(text) {
  console.log(text);
}
printMessage(result);

// array 기초
const menus = ["회사소개", "서비스", "고객지원"];
console.log(menus[0]);
console.log(menus[2]);

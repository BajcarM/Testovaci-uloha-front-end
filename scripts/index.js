const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");
const body = document.querySelector("body");
const menuItems = document.querySelectorAll(".menu-nav__item");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
});

for (const item of menuItems) {
  item.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
  }
});

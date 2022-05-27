const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");
const body = document.querySelector("body");
const menuItems = document.querySelectorAll(".menu-nav__item");
const articles = document.querySelectorAll("article");
const headers = document.querySelectorAll("h2");
const socialIcons = document.querySelector(".social");

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

let averageHeight = 0;
articles.forEach((article) => {
  averageHeight += article.getBoundingClientRect().height / articles.length;
});

let sumOfHeaders = 0;
headers.forEach((header) => {
  sumOfHeaders += header.innerText.split(" ").length;
});

articles.forEach((article) => {
  article.addEventListener("click", (e) => {
    console.log({
      name: e.currentTarget.querySelector("h2").innerText,
      date: e.currentTarget.querySelector("span").innerText.split("/")[0],
      length: e.currentTarget.querySelector("span").innerText.split("/")[1],
    });
  });
});

window.addEventListener("scroll", () => {
  console.log(
    `viewport to top  ${
      socialIcons.getBoundingClientRect().top
    }, document to top ${
      window.scrollY + socialIcons.getBoundingClientRect().top
    }`
  );
});

console.log(`Number of articles - including banner: ${articles.length}`);
console.log(`Average height of articles - including banner: ${averageHeight}`);
console.log(`Average height of articles - including banner: ${sumOfHeaders}`);

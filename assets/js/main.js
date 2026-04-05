const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll(".reveal");
const onReveal = () => {
  revealEls.forEach((el) => {
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight - 70) el.classList.add("active");
  });
};

const sections = document.querySelectorAll("main section[id], header[id]");
const menuLinks = document.querySelectorAll(".menu a");

const setActiveMenu = () => {
  let current = "home";
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });

  menuLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", () => {
  onReveal();
  setActiveMenu();
});
window.addEventListener("load", () => {
  onReveal();
  setActiveMenu();
});

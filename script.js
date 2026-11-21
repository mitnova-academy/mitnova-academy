// MITNOVA Academy - script.js

const header = document.querySelector(".site-header");
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

// Open or close the mobile menu
function setMenu(open) {
  nav.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

toggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("open"));
});

// Close the menu after tapping any link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Close the menu with the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

// Add a shadow to the header once the page is scrolled
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

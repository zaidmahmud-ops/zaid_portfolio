const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("open");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

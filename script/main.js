
const primaryHeader = document.querySelector(".primary_header");
const navToggle = document.querySelector(".buttony");
const primaryNav = document.querySelector(".primary_nav");

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", true)
        : navToggle.setAttribute("aria-expanded", false);
    primaryNav.toggleAttribute("data-visible");
});
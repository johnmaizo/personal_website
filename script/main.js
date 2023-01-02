const primaryHeader = document.querySelector(".primary_header");
const navToggle = document.querySelector(".buttony");
const primaryNav = document.querySelector(".primary_nav");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", true)
    : navToggle.setAttribute("aria-expanded", false);
  primaryNav.toggleAttribute("data-visible");
});

// Animation below

const In = "fadeInRight";
const Out = "fadeOutRight";

// Second animation

const animateIn = "animate__" + In;
const animateOut = "animate__" + Out;

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(animateIn);
      entry.target.classList.remove(animateOut);
    } else {
      entry.target.classList.remove(animateIn);
      entry.target.classList.add(animateOut);
    }
  });
});

const hiddenElements1 = document.querySelectorAll(".animate_right");
hiddenElements1.forEach((el) => observer1.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeInLeft");
      entry.target.classList.remove("animate__fadeOutLeft");
    } else {
      entry.target.classList.remove("animate__fadeInLeft");
      entry.target.classList.add("animate__fadeOutLeft");
    }
  });
});

const hiddenElements2 = document.querySelectorAll(".animate_left");
hiddenElements2.forEach((el) => observer2.observe(el));

// Scroll nav-bar

const header = document.querySelector(".here");
const sectionOne = document.querySelector(".hero_expanded");
const navHome = document.querySelector(".navHome");

// hehey
const scrolledNav = document.querySelector(".scrolled_nav");
const changeDirect = document.querySelector(".change");

const sectionOneOptions = {
  rootMargin: "-10px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav_scrolled");
      navHome.classList.remove("active");

      scrolledNav.classList.add("show");
      scrolledNav.classList.remove("hide");

      changeDirect.classList.add("change_direction");
    } else {
      header.classList.remove("nav_scrolled");
      navHome.classList.add("active");

      scrolledNav.classList.remove("show");
      scrolledNav.classList.add("hide");

      changeDirect.classList.remove("change_direction");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


// ! Scroll Highlight

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 10;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

const primaryHeader = document.querySelector(".primary_header");
const navToggle = document.querySelector(".buttony");
const primaryNav = document.querySelector(".primary_nav");
const hamburger = document.querySelector(".hamburger");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  hamburger.toggleAttribute("data-hamburger");
  primaryNav.toggleAttribute("data-animate");
  
  inviButton.toggleAttribute("data-hide");
  navToggle.toggleAttribute("data-fixed");
  navToggle.toggleAttribute("data-show");
  if(primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", true);
  }
  else {
    navToggle.setAttribute("aria-expanded", false);
  }
});

const inviButton = document.querySelector(".invisible");

inviButton.addEventListener("click", () => {
  if (primaryNav.hasAttribute("data-animate")) {
    
    primaryNav.toggleAttribute("data-animate");
    
    hamburger.toggleAttribute("data-hamburger");

    inviButton.toggleAttribute("data-hide");
    navToggle.toggleAttribute("data-fixed");
    navToggle.toggleAttribute("data-show");

    primaryNav.toggleAttribute("data-visible");
  }
  
  if(primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", true);
  }
  else {
    navToggle.setAttribute("aria-expanded", false);
  }
  
});

// ! Mobile When Scrolling 
let timeoutId;

window.addEventListener("scroll", () => {
  /*
  if (!navToggle.hasAttribute("data-show")) {
    clearTimeout(timeoutId);
    navToggle.setAttribute("data-transparency", false);
  
    timeoutId = setTimeout(function() {
      navToggle.setAttribute("data-transparency", true);
    }, 200);
  }
  */
  if (navToggle.getAttribute("aria-expanded") === "false") {
    clearTimeout(timeoutId);
    navToggle.setAttribute("data-transparency", false);
  
    timeoutId = setTimeout(function() {
      navToggle.setAttribute("data-transparency", true);
    }, 200);
  }
});

// ! Animation below

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeInRight");
      entry.target.classList.remove("animate__fadeOutRight");
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
  rootMargin: "-430px 0px 0px 0px" // ! CHANGE HERE
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
    const sectionTop = current.offsetTop - 430; //! SAME SA ROOT MARGIN!!!!!!!!!!!
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

// ! reset the site when refreshing the webpage
if(window.location.hash) {
  window.location.replace("index.html");
}

history.scrollRestoration = "manual";

$(document).ready(function(){
  $(this).scrollTop(0);
  document.body.style.overflow = "hidden"; // ! ILISI RA ONYA
});

// ! for loading screen
$(window).load(function() {
  $(".loading").fadeOut("slow");

  setTimeout(function() {
    $(".hello").addClass("showy");
    $(".hello").addClass("animate__fadeInUp");
  }, 1100);

  setTimeout(function() {
      $(".iAm").addClass("show");
      $(".iAm").addClass("animate__fadeInUp");
  }, 1800);

  setTimeout(() => {
      $(".namey").addClass("width100");
  }, 2800);

  setTimeout(() => {
      $(".slogan").addClass("show");
      $(".slogan").addClass("animate__fadeInDown");
  }, 4600);

  setTimeout(() => {
      $(".primary_nav").addClass("primary_nav-animate");
    }, 6200);
    
  setTimeout(() => {
      $(".buttony").addClass("buttony_move");
  }, 6200);

  setTimeout(() => {
      $(".mousey").addClass("mousey_orig");
      $(".primary_nav").addClass("primary_nav_remove_transition");
  }, 7600);
  
  // ! SCROLL
  setTimeout(function() {
    document.body.style.overflow = "auto";
  }, 7300);

});
// Ends here
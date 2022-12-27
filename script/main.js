const primaryHeader = document.querySelector(".primary_header");
const navToggle = document.querySelector(".buttony");
const primaryNav = document.querySelector(".primary_nav");

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", true)
        : navToggle.setAttribute("aria-expanded", false);
    primaryNav.toggleAttribute("data-visible");
});


// Animation below

const In = 'fadeInRight';
const Out = 'fadeOutRight';

// Bruh

const animateIn = 'animate__' + In;
const animateOut = 'animate__' + Out;


const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add(animateIn);
            entry.target.classList.remove(animateOut);
        }
        else {
            entry.target.classList.remove(animateIn);
            entry.target.classList.add(animateOut);
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.animate_right');
hiddenElements1.forEach((el) => observer1.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInLeft');
            entry.target.classList.remove('animate__fadeOutLeft');
        }
        else {
            entry.target.classList.remove('animate__fadeInLeft');
            entry.target.classList.add('animate__fadeOutLeft');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.animate_left');
hiddenElements2.forEach((el) => observer2.observe(el));
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link / icon, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 

/*==================== Typing Cursor Script ====================*/ 
const text = "Data Scientist & Accountant";
const subtitleElement = document.getElementById("typing-effect");

let index = 0;
let cursorVisible = true;
subtitleElement.textContent = "";

const typingEffect = setInterval(function() {
    if (index < text.length) {
        subtitleElement.textContent += text[index];
        index++;
    } else {
        clearInterval(typingEffect);
    }
}, 50); // Adjust the typing speed by changing the interval value (in milliseconds)

setInterval(function() {
    cursorVisible = !cursorVisible;
    subtitleElement.textContent = text.substr(0, index) + (cursorVisible ? "|" : "");
}, 500); // Adjust the cursor blinking rate by changing the interval value (in milliseconds)

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
//navbar global variable
const ulId = document.querySelector('#navbar__list');
//section global variable
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
 */




/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
//function to build the nav
function theNav() {
    sections.forEach(section => {
        //create a link for each section
        const nav = document.createElement('li');
        nav.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        //append all the sections to the nav element
        ulId.appendChild(nav);
    });
}
//calling the nav function to build the nav
theNav();



// Add class 'active' to section when near top of viewport
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect 
//information about the size of an element and its position relative to the viewport.
//https://www.w3schools.com/jsref/event_onscroll.asp
//https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp

//let sectionInView = document.querySelectorAll('section');

//window.onscroll = function() {
//document.querySelectorAll('section').forEach(function(inView) {
//if (
// inView.getBoundingClientRect().top >= 0
// ) {
//inView.classList.add('your-active-class');
// } else {
//inView.classList.remove('your-active-class')
// }
// });
//};




// Scroll to anchor ID using scrollTO event
//https://www.codegrepper.com/code-examples/javascript/javascript+smooth+scroll+to+anchor+element
//https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

//scroll into view on click event with smooth scroll behavior
const scroll = () => {
    document.querySelectorAll('.menu__link').forEach((onScroll) => {
        onScroll.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(onScroll.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        });
    });
};
scroll();


/**
 * End Main Functions
 * Begin Events
 * 
 */

//https://www.w3schools.com/jsref/event_preventdefault.asp
//https://www.youtube.com/watch?v=3SNyh57XSIA
// the addEventListener to listen for scroll event

//document.addEventListener('scroll', function(event) {
//to prevent default
// event.preventDefault();
//});


//to hide nav nar on scroll
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Get the button
//declaring the button variable
const myButton = document.getElementById("myBtn");
//re-declaring the function variable
let sectionInView = document.querySelectorAll('section');


// Window on scroll function for both thr button display and the active class
window.onscroll = function() {
    scrollFunction()

    document.querySelectorAll('section').forEach(function(inView) {
        //argument to check if the section in view doesn't already contain the active class
        if (
            inView.getBoundingClientRect().top <= 300 &&
            inView.getBoundingClientRect().bottom >= 150
        ) {

            //then add the active class
            inView.classList.add("active");
            inView.style.cssText = "background-color: purple;";
            //else it removes the active class
        } else {
            inView.classList.remove("active");
            inView.style.cssText = "background-color: inherit;";
        }
    });
};

//function to add a button to scroll back to the top of the page
function scrollFunction() {
    //when user scrolls down 50px frrom the top of the page, the button shows up
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //if its greater than 50px the button shows up
        myButton.style.display = "block";
    } else {
        //else the button remains hidden
        myButton.style.display = "none";
    }
}

// on click, the the document scrolls to the top of the page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Build menu 

// Scroll to section on link click

// Set sections as active
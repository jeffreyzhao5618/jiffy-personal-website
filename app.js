// Selectors
body = document.querySelector('body');
project1_button = document.querySelector('.project-cell-container .project-cell:nth-of-type(1)'); // Project 1 cell
project1_popup = document.getElementById('project1'); // Project 1 popup
project1_close_butt = document.querySelector('#project1 .project-popup .close-dot'); // Close button for project 1
project2_button = document.querySelector('.project-cell-container .project-cell:nth-of-type(2)'); // Project 2 cell
project2_popup = document.getElementById('project2'); // Project 2 popup
project2_close_butt = document.querySelector('#project2 .project-popup .close-dot'); // Close button for project 2
//[0]=Home [1]=About [2]=Projects [3]=Contact
nav_buttons = document.querySelectorAll('.topnav li a'); // Navbar buttons

// Section selectors
home = document.querySelector('#home');
about = document.querySelector('#about');
about_pos = about.offsetTop;
projects = document.querySelector('#projects');
projects_pos = projects.offsetTop;
contact = document.querySelector('#contact');
contact_pos = contact.offsetTop;

// Projects
// Project one: Plant Flooding
project1_button.addEventListener('click', () => {
    project1_popup.style.display = 'block';
    body.classList.add('stop-scrolling');
});

project1_close_butt.addEventListener('click', () => {
    project1_popup.style.display = 'none';
    body.classList.remove('stop-scrolling');
});
//Project two: Speedwagon Project
project2_button.addEventListener('click', () => {
    project2_popup.style.display = 'block';
    body.classList.add('stop-scrolling');
});
project2_close_butt.addEventListener('click', () => {
    project2_popup.style.display = 'none';
    body.classList.remove('stop-scrolling');
});

// Scroll functionality for navbar
let boundary = 50;
nav_buttons[0].addEventListener('click', () => {
    home.scrollIntoView();
});
nav_buttons[1].addEventListener('click', () => {
    window.scrollTo(0,about_pos-boundary);
});
nav_buttons[2].addEventListener('click', () => {
    window.scrollTo(0,projects_pos-boundary);
});
nav_buttons[3].addEventListener('click', () => {
    window.scrollTo(0,contact_pos-50);
});

// Make current section active
let yscroll = 0;
let currentSect = 0;
// Update yscroll
window.onscroll = () => {
    yscroll = window.scrollY; // Number of pixels scrolled vertically
    checkScroll();
};
// Make current section button active if a new section is scrolled to
function checkScroll(){
    let boundary = 300;
    if(yscroll < about_pos - boundary){ // In Home section
        if(currentSect != 0) { changeButtons(0) };
    } else if(yscroll > about_pos - boundary && yscroll < projects_pos - boundary) { // In About section
        if(currentSect != 1) { changeButtons(1) };
    } else if(yscroll > projects_pos - boundary && yscroll < contact_pos - boundary) { // In Projects section
        if(currentSect != 2) { changeButtons(2) };
    } else if(yscroll > contact_pos -boundary && currentSect != 3) { // In Contact section
        if(currentSect != 3) { changeButtons(3) };
    }
};
//change button colors
function changeButtons(newSectionID){
    for(let i=0; i < nav_buttons.length; i++){
        if(i == newSectionID){
            nav_buttons[i].classList.add('active');
        }
        else{
            nav_buttons[i].classList.remove('active');
        }
    }
    //change current sect so it is not constantly updating the buttons classList
    currentSect = newSectionID;
}

// recalibrate positions of sections on window resize
window.addEventListener('resize', () => {
    about_pos = about.offsetTop;
    projects_pos = projects.offsetTop;
    contact_pos = contact.offsetTop;
    checkScroll();
});
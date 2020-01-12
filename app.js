body = document.querySelector('body');
project1_button = document.querySelector('.project-cell-container .project-cell:nth-child(1)');
project1_popup = document.getElementById('project1');
project1_close_butt = document.querySelector('#project1 .project-popup .close-dot');
nav_buttons = document.querySelectorAll('.topnav li a');

//sections
home = document.querySelector('#home');
about = document.querySelector('#about');
about_pos = about.offsetTop;
projects = document.querySelector('#projects');
projects_pos = projects.offsetTop;
contact = document.querySelector('#contact');
contact_pos = contact.offsetTop;


console.log(project1_close_butt);

project1_button.addEventListener('click', () => {
    project1_popup.style.display = 'block';
    body.classList.add('stop-scrolling');
});

project1_close_butt.addEventListener('click', () => {
    project1_popup.style.display = 'none';
    body.classList.remove('stop-scrolling');
});

// Scroll functionality for navbar
nav_buttons[0].addEventListener('click', () => {
    home.scrollIntoView();
});


nav_buttons[1].addEventListener('click', () => {
    window.scrollTo(0,about_pos-50);
});

nav_buttons[2].addEventListener('click', () => {
    window.scrollTo(0,projects_pos-50);
});

nav_buttons[3].addEventListener('click', () => {
    window.scrollTo(0,contact_pos-50);
});

// recalibrate positions of sections on window resize
window.addEventListener('resize', () => {
    about_pos = about.offsetTop;
    projects_pos = projects.offsetTop;
    contact_pos = contact.offsetTop;
});

console.log(about_pos);
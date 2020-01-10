body = document.querySelector('body');
project1_button = document.querySelector('.project-cell-container .project-cell:nth-child(1)');
project1_popup = document.getElementById('project1');
project1_close_butt = document.querySelector('#project1 .project-popup .close-dot');
console.log(project1_close_butt);

project1_button.addEventListener('click', () => {
    project1_popup.style.display = 'block';
    body.classList.add('stop-scrolling');
});

project1_close_butt.addEventListener('click', () => {
    project1_popup.style.display = 'none';
    body.classList.remove('stop-scrolling');
})
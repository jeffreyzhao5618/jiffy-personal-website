project1_button = document.querySelector('.project-cell-container .project-cell:nth-child(1)');
project1_popup = document.getElementById('project1')

console.log(project1_popup);
project1_button.addEventListener('click', () => {
    project1_popup.style.display = 'block';
    console.log('oioo');
});
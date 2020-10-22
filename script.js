let btn = document.querySelector('.toggle-button');
let menu = document.querySelector('.navbar-links');

btn.addEventListener('click', () => {
    menu.classList.toggle('on-off');
});
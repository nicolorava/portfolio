// main nav

const ulToggle = document.querySelector('.ul-toggle');
const mainNav = document.querySelector('.main-nav');
const listItems = document.querySelector('.items-list');

ulToggle.addEventListener('click', function () {
    ulToggle.classList.toggle('closed');
    mainNav.classList.toggle('open');
    listItems.classList.toggle('visible');
    document.body.classList.toggle('no-scroll');
})
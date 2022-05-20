const hamburgerBtn = document.querySelector(".hamburger-btn");
const menu = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', drop);

function drop() {
    if (menu.style.height == '0px') {
        menu.style.height = '340px';
    } else {
        menu.style.height = '0px';
    }
}
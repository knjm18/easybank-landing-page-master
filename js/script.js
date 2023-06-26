const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn img')
const dropDownMenu = document.querySelector('.dropdown-menu')
const iconHam = document.querySelector('.icon-hamburger')
const iconClose = document.querySelector('.icon-close')
const backBlur = document.querySelector('.blur')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    iconHam.classList.toggle('active');
    iconClose.classList.toggle('active');
    backBlur.classList.toggle('active');
}

const nav = document.querySelector('#nav');

const onScroll = () => {
    const scrollPosition = window.scrollOffsetY;
    nav.classList.toggle("scrolled-down", scrollPosition > 56);
};

document.addEventListener(
    "scroll",
    onScroll,
    {passive: true}
    );
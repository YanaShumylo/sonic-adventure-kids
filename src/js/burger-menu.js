const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-menu]');
const nav = document.querySelector('.mobile-nav');

const closeMenu = () => menu.classList.remove('is-open');
openBtn.addEventListener('click', () => {
menu.classList.add('is-open');
});

closeBtn.addEventListener('click', closeMenu);

nav.addEventListener('click', e => {
if (e.target.closest('a')) {
closeMenu();
}
});

window.addEventListener('resize', () => {
if (window.innerWidth >= 768) {
closeMenu();
}
});
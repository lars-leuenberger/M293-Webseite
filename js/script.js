const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    const isOpen = menu.classList.toggle('open');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('show');

    menu.setAttribute('aria-hidden', !isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

document.addEventListener('keydown', (event) => {
    const isMenuOpen = menu.classList.contains('open');
    if (event.key === 'Escape' && isMenuOpen) {
        toggleMenu();
    }
});

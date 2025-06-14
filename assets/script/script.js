document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    navToggle.addEventListener('click', function () {
        mainNav.classList.toggle('nav--open');
    });

    // Закрытие меню при клике по ссылке
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('nav--open');
        });
    });
});

// Переход к началу страницы при клике на footer
document.getElementById('footer').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});
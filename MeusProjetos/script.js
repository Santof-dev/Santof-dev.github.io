document.addEventListener('DOMContentLoaded', () => {

    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navLinks = document.querySelector('.nav-links');

    menuHamburguer.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        const icon = menuHamburguer.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuHamburguer.querySelector('i').classList.remove('fa-times');
                menuHamburguer.querySelector('i').classList.add('fa-bars');
            }
        });
    });

});
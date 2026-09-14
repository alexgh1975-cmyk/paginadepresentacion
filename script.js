document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Menu para móvil
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');

        // Animación de enlaces
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animación del botón burger
        burger.classList.toggle('toggle');
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => link.style.animation = '');
            }
        });
    });

    // Añadir estilo CSS de animación dinámicamente si no está en el CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .burger.toggle .line1 { transform: rotate(-45deg) translate(-5px, 6px); }
        .burger.toggle .line2 { opacity: 0; }
        .burger.toggle .line3 { transform: rotate(45deg) translate(-5px, -6px); }
        
        @keyframes navLinkFade {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
});

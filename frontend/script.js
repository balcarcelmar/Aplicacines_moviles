// Cambiar el cursor al pasar sobre el video
const hero = document.querySelector('.hero');
const watchReel = document.querySelector('.watch-reel');

hero.addEventListener('mousemove', (e) => {
    watchReel.style.left = `${e.clientX}px`;
    watchReel.style.top = `${e.clientY}px`;
});

// Cambio de fondo dinámico
const dynamicSection = document.querySelector('.dynamic-section');

window.addEventListener('scroll', () => {
    const sectionTop = dynamicSection.offsetTop;
    const sectionHeight = dynamicSection.offsetHeight;
    const scrollPos = window.scrollY + window.innerHeight;

    if (scrollPos > sectionTop && scrollPos < sectionTop + sectionHeight) {
        document.body.style.backgroundColor = '#252422';
    } else {
    document.body.style.backgroundColor = '#f4f4f4';
    }
});

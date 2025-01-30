document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel ul');
    const customCursor = document.querySelector('.custom-cursor');
    let isDragging = false;
    let startX, scrollLeft;

    // Deslizamiento con el mouse
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        customCursor.style.backgroundColor = 'hotpink'; // Cambiar color al arrastrar
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        customCursor.style.backgroundColor = 'pink'; // Restaurar color
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        customCursor.style.backgroundColor = 'pink'; // Restaurar color
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta la velocidad del deslizamiento
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Mover el cursor personalizado
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.pageX}px`;
        customCursor.style.top = `${e.pageY}px`;
    });
});
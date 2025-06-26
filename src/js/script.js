let slideIndex = 0;
const slides = document.querySelectorAll('.carrossel-item');

function showSlide(n) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    slides[slideIndex].classList.add('active');
}

function mudarSlide(n) {
    showSlide(slideIndex + n);
}

document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        showSlide(slideIndex);
    }
});

setInterval(() => {
mudarSlide(1);
}, 5000);
let slideIndex = 0; // Índice do slide atual
const slides = document.querySelectorAll('.carrossel-item'); // Seleciona todas as imagens do carrossel

// Função para mostrar um slide específico
function showSlide(n) {
    // Esconde todos os slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Calcula o novo índice do slide para fazer o loop
    if (n >= slides.length) {
        slideIndex = 0; // Volta para o primeiro slide se for além do último
    } else if (n < 0) {
        slideIndex = slides.length - 1; // Vai para o último slide se for antes do primeiro
    } else {
        slideIndex = n;
    }

    // Mostra o slide atual
    slides[slideIndex].classList.add('active');
}

// Função para mudar o slide (próximo ou anterior)
function mudarSlide(n) {
    showSlide(slideIndex + n);
}

// Inicia o carrossel mostrando o primeiro slide ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        showSlide(slideIndex);
    }
});

// Opcional: Auto-play do carrossel (descomente para ativar)
// setInterval(() => {
//     mudarSlide(1);
// }, 5000); // Muda de slide a cada 5 segundos (5000 milissegundos)
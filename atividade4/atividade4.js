// Selecione as miniaturas e a área de destaque
const miniaturas = document.querySelectorAll('.miniatura');
const destaque = document.querySelector('.destaque');
const imagemDestaque = document.querySelector('.imagem-destaque');

// Adicione um evento de clique às miniaturas
miniaturas.forEach((miniatura) => {
  miniatura.addEventListener('click', () => {
    // Obtenha o src da miniatura clicada
    const src = miniatura.src;

    // Exiba a imagem completa na área de destaque
    imagemDestaque.src = src;
  });
});
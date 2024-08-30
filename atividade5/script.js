
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;


const palpiteInput = document.getElementById('palpite');
const enviarButton = document.getElementById('enviar');
const mensagemElement = document.getElementById('mensagem');


enviarButton.addEventListener('click', () => {
  const palpite = parseInt(palpiteInput.value);

  if (palpite < numeroAleatorio) {
    mensagemElement.textContent = 'Seu palpite está muito baixo!';
  } else if (palpite > numeroAleatorio) {
    mensagemElement.textContent = 'Seu palpite está muito alto!';
  } else {
    mensagemElement.textContent = 'Parabéns! Você acertou!';
   
    setTimeout(() => {
      numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      mensagemElement.textContent = '';
      palpiteInput.value = '';
    }, 2000);
  }
});

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const trocarButton = document.getElementById('trocar');


trocarButton.addEventListener('click', () => {

  div2.classList.add('vermelho');


  div2.classList.remove('azul');


  div3.classList.toggle('verde');
});
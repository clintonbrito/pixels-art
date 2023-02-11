// // Crie um filho para primeiroFilhoDoFilho.
// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// const filhoPrimeiroFilhoDoFilho = document.createElement('section');
// filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// 1 - Adicione à página o título "Paleta de Cores".

// const body = document.getElementsByTagName('body');
const h1 = document.createElement('h1');
h1.id = 'title';
document.body.appendChild(h1);
h1.textContent = 'Paleta de Cores';

const divMainDasMain = document.createElement('div');
divMainDasMain.id = 'mainDasMain';
document.body.appendChild(divMainDasMain);
divMainDasMain.style.display = 'flex';
divMainDasMain.style.width = '100%';
divMainDasMain.style.justifyContent = 'center';

const divMain = document.createElement('div');
divMain.id = 'color-palette';
divMain.style.width = '50%';
divMain.style.display = 'flex';
divMain.style.justifyContent = 'space-evenly';
// divMain.textContent = 'Bem-vindo(a) à paleta de cores do Bill :)';
// divMain.style.width = '1000px';
// divMain.style.height = '50px';
divMainDasMain.appendChild(divMain);

// const filhosDivMain = divMain.children;
// filhosDivMain.style.borderColor = 'black 1px';

// 2 - Adicione à página uma paleta contendo quatro cores distintas.
// 3 - Adicione a cor preta como a primeira cor da paleta de cores.

// const addNewColors = (colors) => {
//   const collorsPallete = document.getElementsByClassName('color');
//   for (let index = 0; index < collorsPallete.length; index += 1) {
//     }
// }

// addNewColors(['#000000', '#9AA899', '#4A7B9D', '#54577C']);

// Esse código acima foi a primeira tentativa de resolver o requisito 2, mas depois mudei de ideia e parti para outra abordagem de solução, já pensando em gerar as cores aleatoriamente.

const colorGenerator = () => {
  const r = parseInt(Math.random() * 256, 10);
  const g = parseInt(Math.random() * 256, 10);
  const b = parseInt(Math.random() * 256, 10);
  return `rgb(${r}, ${g}, ${b})`;
};

// Demorei para descobrir o erro do parseInt para colocar o 10 depois da vírgula como segundo parâmetro da função, conforme referência:
// https://www.w3schools.com/jsref/jsref_parseint.asp
// Referência do gerador de cores:
// https://stackoverflow.com/questions/51628092/random-rgb-color-generator-with-javascript
// Só coloquei parseInt ao invés de Math.floor porque é o que estamos utilizando no momento.

const divArray = ['Color 1', 'Color 2', 'Color 3', 'Color 4'];

const divBlack = document.createElement('div');
divMain.appendChild(divBlack);
divBlack.className = 'color color0';
divBlack.textContent = `${divArray[0]}`;
divBlack.style.display = 'inline-block';
divBlack.style.width = '100px';
divBlack.style.height = '100px';
divBlack.style.backgroundColor = 'black';
divBlack.style.color = 'white';
divBlack.style.border = '1px solid rgb(0, 0, 0)';

for (let index = 1; index < divArray.length; index += 1) {
  const div = document.createElement('div');
  divMain.appendChild(div);
  div.className = `color colors color${index}`;
  div.textContent = divArray[index];
  div.style.display = 'inline-block';
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.backgroundColor = colorGenerator();
  div.style.border = '1px solid rgb(0, 0, 0)';
}

// Referência para já criar classe, definir o texto e fazer o appendChild tudo de uma vez:
// https://stackoverflow.com/questions/32670902/create-multiple-elements

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.

// const title = document.querySelector('#title');
// title.parentNode
// divBlack.insertBefore(button, divBlack);

const colorsDiv = document.querySelectorAll('.colors');

function changeColor() {
  for (let index = 0; index < colorsDiv.length; index += 1) {
    colorsDiv[index].style.backgroundColor = colorGenerator();
  }
}

const button = document.createElement('button');
button.textContent = 'Gerar cores aleatórias';
document.body.appendChild(button);
document.body.insertBefore(button, divMainDasMain);
button.id = 'button-random-color';
button.textContent = 'Cores aleatórias';
button.addEventListener('click', changeColor);

// Esse código logo abaixo foram tentativas frustradas de fazer funcionar o botão:

// button.addEventListener('click', () => {
//   for (const div of divMain.children) {
//     if (div.classList.contains('color')) {
//       div.style.backgroundColor = colorGenerator();
//     }
//   }

// colorsDiv.forEach(div => {
//   div.style.backgroundColor = colorGenerator();
// }

// Referência para criar o button ANTES da divMain:
// https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-first-child
// Referência para atribuir a função de gerar cores no botão criado:
// https://stackoverflow.com/questions/67679502/how-to-generate-different-colours-with-button
// Troquei todas as .innerHTML acima por textContent por questões de segurança, conforme artigo abaixo:
// https://www.mundojs.com.br/2019/07/18/diferencas-entre-innerhtml-innertext-e-textcontent/

// 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.

button.addEventListener('click', () => {
  const colors = [];
  for (let index = 0; index < colorsDiv.length; index += 1) {
    colorsDiv[index].style.backgroundColor = colorGenerator();
    colors.push(colorsDiv[index].style.backgroundColor);
  }
  return localStorage.setItem('colorPalette', JSON.stringify(colors));
});

const savedColors = JSON.parse(localStorage.getItem('colorPalette'));
if (savedColors) {
  for (let index = 0; index < colorsDiv.length; index += 1) {
    colorsDiv[index].style.backgroundColor = savedColors[index];
  }
}

// O vídeo do Nasc ajudou bastante para resolver esse requisito:
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/c9aaef07-c868-42d6-aac9-b5a9116cba3d/lesson/c99f9115-37af-4612-a803-6f99d03757b0

// Crie um filho para primeiroFilhoDoFilho.

// 1 - Adicione à página o título "Paleta de Cores".

const h1 = document.createElement('h1');
h1.id = 'title';
document.body.appendChild(h1);
h1.textContent = 'Paleta de Cores';
h1.style.fontFamily = 'sans-serif';

const divMainDasMain = document.createElement('div');
divMainDasMain.id = 'main-color-palette';
document.body.appendChild(divMainDasMain);
divMainDasMain.style.display = 'flex';
divMainDasMain.style.width = '100%';
divMainDasMain.style.justifyContent = 'center';
divMainDasMain.style.flexWrap = 'wrap';

const divMain = document.createElement('div');
divMain.id = 'color-palette';
divMain.style.width = '15%';
// divMain.style.display = 'flex';
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

const numberColors = 4;
const divPalette = [];

for (let index = 1; index <= numberColors; index += 1) {
  divPalette.push([index]);
}

const divBlack = document.createElement('div');
divMain.appendChild(divBlack);
divBlack.className = 'color color0 selected';
divBlack.style.display = 'inline-block';
divBlack.style.width = '40px';
divBlack.style.height = '40px';
divBlack.style.backgroundColor = 'black';
divBlack.style.color = 'white';
divBlack.style.border = '1px solid rgb(0, 0, 0)';

for (let index = 1; index < divPalette.length; index += 1) {
  const div = document.createElement('div');
  divMain.appendChild(div);
  div.className = `color randomColors color${index}`;
  div.style.display = 'inline-block';
  div.style.width = '40px';
  div.style.height = '40px';
  div.style.backgroundColor = colorGenerator();
  div.style.border = '1px solid rgb(0, 0, 0)';
}

// Referência para já criar classe, definir o texto e fazer o appendChild tudo de uma vez:
// https://stackoverflow.com/questions/32670902/create-multiple-elements

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.

// const title = document.querySelector('#title');
// title.parentNode
// divBlack.insertBefore(button, divBlack);

const randomColors = document.querySelectorAll('.randomColors');

function changeColor() {
  for (let index = 0; index < randomColors.length; index += 1) {
    randomColors[index].style.backgroundColor = colorGenerator();
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

// randomColors.forEach(div => {
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
  for (let index = 0; index < randomColors.length; index += 1) {
    randomColors[index].style.backgroundColor = colorGenerator();
    colors.push(randomColors[index].style.backgroundColor);
  }
  return localStorage.setItem('colorPalette', JSON.stringify(colors));
});

const savedColors = JSON.parse(localStorage.getItem('colorPalette'));
if (savedColors) {
  for (let index = 0; index < randomColors.length; index += 1) {
    randomColors[index].style.backgroundColor = savedColors[index];
  }
}

// Explicação do algoritmo:
// 1º - Criar um addEventListener no botão de gerar cores aleatórias para, quando clicado, executar uma função que irá armazenar as cores geradas pela função colorGenerator, que foram mapeadas através da classe 'radonmColors', em uma nova variável chamada 'savedColors';
// 2º - Utilizar o laço de repetição for para iterar sobre os itens do "array" (comportamento de array dos itens mapeados pelo querySelectorAll) das cores que foram geradas aletoriamente;
// 3º - Na medida que for iterando sobre cada item do array das cores que foram geradas aleatoriamente, incluir essa informação em um novo array chamado 'colors';
// 4º - O retorno dessa função será jogar esses dados do array 'colors' no localStorage, convertendo em string via JSON.stringify;
// 5º - [Esse foi o passo mais difícil abstrair: como fazer que esses dados armazenados no localStorage fossem transferidos para o backgroundColor do CSS das divs quando a página fosse atualizada. Eis a solução:]
// 5º - Criar uma constante chamada savedColors em que será atribuída como valor nessa constante os valores do chave 'colorPallete' que foram salvos no localStorage;
// 6º - Utilizar uma estrutura condicional para, se houver valores armazenados em 'savedColors', iterar sobre todos os itens desse array e, por fim, atribuir o valor de cada item desse aray à propriedade style.backgroundColor do CSS dessas divs.

// O vídeo do Nasc ajudou bastante para resolver esse requisito:
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/c9aaef07-c868-42d6-aac9-b5a9116cba3d/lesson/c99f9115-37af-4612-a803-6f99d03757b0

// 6 - Adicione à página um quadro contendo 25 pixels.

const mainSectionPixels = document.createElement('section');
mainSectionPixels.id = 'main-pixel-board';
document.body.appendChild(mainSectionPixels);
mainSectionPixels.style.display = 'flex';
mainSectionPixels.style.width = '100%';
mainSectionPixels.style.justifyContent = 'center';

const sectionPixels = document.createElement('section');
sectionPixels.id = 'pixel-board';
mainSectionPixels.appendChild(sectionPixels);
sectionPixels.style.width = '17%';
sectionPixels.style.display = 'flex';
sectionPixels.style.justifyContent = 'space-evenly';
sectionPixels.style.flexWrap = 'wrap';

const numberPixels = 25;
const divPixel = [];

for (let index = 0; index < numberPixels; index += 1) {
  divPixel.push([index]);
}

for (let index = 0; index < numberPixels; index += 1) {
  const div = document.createElement('div');
  sectionPixels.appendChild(div);
  div.className = `pixel pixel${index}`;
  div.style.display = 'inline-block';
  div.style.width = '40px';
  div.style.height = '40px';
  div.style.backgroundColor = 'white';
  div.style.border = '1px solid rgb(0, 0, 0)';
}

// const color = document.getElementsByClassName('pixel');
// for (let index = 0; index < color.length; index += 1) {
//   color[index].style.maxWidth = '20%';
// }

// 8 - Defina a cor preta como cor inicial da paleta de cores.
// 9 - Crie uma função para selecionar uma cor na paleta de cores.

const colorFromPalette = document.querySelectorAll('.color');

for (let index = 0; index < colorFromPalette.length; index += 1) {
  colorFromPalette[index].addEventListener('click', () => {
    colorFromPalette.forEach((item) => item.classList.remove('selected'));
    colorFromPalette[index].classList.add('selected');
  });
}

// Esses links do Stack Overflow me ajudaram bastante a construir essa função acima, porque eu não estava conseguindo iterar em items de uma NodeList que é o que retorna a propriedade querySelectorAll, ao invés de um array tradicional:
// https://stackoverflow.com/questions/71044876/how-can-i-add-or-remove-class-using-queryselectorall-in-react-functional-compo
// https://stackoverflow.com/questions/73575388/uncaught-typeerror-navitem-foreach-is-not-a-function

const choseColor = (clicar) => {
  const selectedColor = document.getElementsByClassName('selected')[0];
  clicar.target.style.backgroundColor = selectedColor.style.backgroundColor;
  console.log(selectedColor.style.backgroundColor);
};

const pixelDivs = document.getElementById('pixel-board');
pixelDivs.addEventListener('click', choseColor);

// for (let index = 0; index < pixelDivs.length; index += 1) {
//   pixelDivs[index].addEventListener('click', choseColor);
// }

// Algoritmo da solução acima:
// 1º Criar uma variável chamada 'chosenColor' que irá receber a cor do eventListener do click na cor;
// 2º Criar uma função que irá atribuir à variável 'chosenColor' o valor do "índice" do "array" colorFromPallete que foi feito através de querySelectorAll;
// 3º Por meio de um loop for, iterar sobre todos os itens do "array" colorFromPalette e adicionar um addEventListener que, quando clicado, execute a função choseColor;

// Esses códigos logo abaixo foram tentativas frustradas de resolver os requisitos 8 e 9:

// const colorFromPalette = document.getElementsByClassName('color');
// let chosenColor;

// for (let index = 0; index < colorFromPalette.length; index += 1) {
//   colorFromPalette[index].addEventListener('click', () => {
//     chosenColor = colorFromPalette[index].style.backgroundColor;
//   });
// }

// for (let index = 0; index < colorFromPalette.length; index += 1) {
//   colorFromPalette[index].addEventListener('click', () => {
//     colorFromPalette[index].style.backgroundColor = chosenColor;
//   });
// }

// chosenColor.addEventListener('click', () => {
//   const chosenColorInfo = [];
//       randomColors[index].style.backgroundColor = colorGenerator();
//     color.push(chosenColorInfo[index].style.backgroundColor);
//   }
//   return localStorage.setItem('chosenColor', JSON.stringify(chosenColorInfo));
// });

// const savedColors = JSON.parse(localStorage.getItem('colorPalette'));
// if (savedColors) {
//   for (let index = 0; index < randomColors.length; index += 1) {
//     randomColors[index].style.backgroundColor = savedColors[index];
//   }
// }

// 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.

// 11 - Crie um botão que retorne a cor do quadro para a cor inicial.

function clearColors() {
  for (let index = 0; index < pixelDivs.length; index += 1) {
    pixelDivs[index].style.backgroundColor = 'white';
  }
}

const buttonClear = document.createElement('button');
buttonClear.textContent = 'Limpar';
document.body.appendChild(buttonClear);
document.body.insertBefore(buttonClear, mainSectionPixels);
buttonClear.id = 'clear-board';
buttonClear.addEventListener('click', clearColors);

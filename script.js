// // Crie um filho para primeiroFilhoDoFilho.
// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// const filhoPrimeiroFilhoDoFilho = document.createElement('section');
// filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

const body = document.getElementsByTagName('body');
const h1 = document.createElement('h1');
h1.id = 'title';
document.body.appendChild(h1);
h1.innerHTML = 'Paleta de Cores';

const divMain = document.createElement('div');
divMain.id = 'color-palette';
// divMain.innerHTML = 'Bem-vindo(a) à paleta de cores do Bill :)';
divMain.style.width = '1000px';
divMain.style.height = '50px';
document.body.appendChild(divMain);

// const filhosDivMain = divMain.children;
// filhosDivMain.style.borderColor = 'black 1px';

const colorGenerator = () => {
  const r = parseInt(Math.random() * 256, 10);
  const g = parseInt(Math.random() * 256, 10);
  const b = parseInt(Math.random() * 256, 10);
  return `rgb(${r}, ${g}, ${b})`;
};

// Demorei para descobri o erro do parseInt para colocar o 10 depois da vírgula como segundo parâmetro da função, conforme referência: https://www.w3schools.com/jsref/jsref_parseint.asp
// Referência do gerador de cores: https://stackoverflow.com/questions/51628092/random-rgb-color-generator-with-javascript
// Só coloquei parseInt ao invés de Math.floor porque é o que estamos utilizando no momento.

const divArray = ['Color 1', 'Color 2', 'Color 3', 'Color 4'];

const divBlack = document.createElement('div');
divMain.appendChild(divBlack);
divBlack.className = 'color color0';
divBlack.innerHTML = `${divArray[0]}`;
divBlack.style.display = 'inline-block';
divBlack.style.width = '100px';
divBlack.style.height = '100px';
divBlack.style.backgroundColor = 'black';
divBlack.style.color = 'white';
divBlack.style.border = '1px solid rgb(0, 0, 0)';

for (let index = 1; index < divArray.length; index += 1) {
  const div = document.createElement('div');
  divMain.appendChild(div);
  div.className = `color color${index}`;
  div.innerHTML = divArray[index];
  div.style.display = 'inline-block';
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.backgroundColor = colorGenerator();
  div.style.border = '1px solid rgb(0, 0, 0)';
}

// Referência para já criar classe, definir o texto e fazer o appendChild tudo de uma vez: https://stackoverflow.com/questions/32670902/create-multiple-elements

// const addNewColors = (colors) => {
//   const collorsPallete = document.getElementsByClassName('color');
//   for (let index = 0; index < collorsPallete.length; index += 1) {
//     }
// }

// addNewColors(['#000000', '#9AA899', '#4A7B9D', '#54577C']);

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
document.body.appendChild(divMain);

const colorGenerator = () => {
  const r = parseInt(Math.random() * 256);
  const g = parseInt(Math.random() * 256);
  const b = parseInt(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const divArray = ['Color 1', 'Color 2', 'Color 3', 'Color 4'];

for (let index = 0; index < divArray.length; index += 1) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.className = `color div${index}`;
  div.innerHTML = divArray[index];
  div.style.display = 'inline-block';
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.backgroundColor = colorGenerator;
  for (let index2 = 0; index2 < divArray.length; index2 += 1) {
    
  }
}

// .mainClass {
//     display: inline-block;
//     width: 50px
//     height: 50px
// }

// Referência para já criar classe, definir o texto e fazer o appendChild tudo de uma vez: https://stackoverflow.com/questions/32670902/create-multiple-elements

// const addNewColors = (colors) => {
//   const collorsPallete = document.getElementsByClassName('color');
//   for (let index = 0; index < collorsPallete.length; index += 1) {
//     }
// }

// addNewColors(['#000000', '#9AA899', '#4A7B9D', '#54577C']);

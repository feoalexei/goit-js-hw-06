const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('div#boxes');

let numberOfElements = 0;
let arrayOfElements = [];

input.addEventListener('input', () => {
  numberOfElements = +input.value;
});

createBtn.addEventListener('click', () => {
  createBoxes(numberOfElements);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    arrayOfElements.push(element);
  }

  boxes.append(...arrayOfElements);
}

function destroyBoxes() {
  arrayOfElements.length = 0;
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

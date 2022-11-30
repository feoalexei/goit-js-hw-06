const body = document.querySelector('body');
const changeColorBtn = document.querySelector('button.change-color');
const currentColor = document.querySelector('span.color');

changeColorBtn.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

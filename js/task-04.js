const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

const valueDisplay = document.getElementById('value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => updateValue((counterValue -= 1)));

incrementBtn.addEventListener('click', () => updateValue((counterValue += 1)));

const updateValue = (result) => (valueDisplay.textContent = result);

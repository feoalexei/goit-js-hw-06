const input = document.getElementById('validation-input');

console.log(+input.getAttribute('data-length'));

input.addEventListener('blur', isValid);

function isValid() {
  if (input.value.length === +input.getAttribute('data-length')) {
    clearClassList();
    input.classList.add('valid');
  } else {
    clearClassList();
    input.classList.add('invalid');
  }
}

function clearClassList() {
  input.classList.remove(...input.classList);
}

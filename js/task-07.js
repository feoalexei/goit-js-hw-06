const inputRange = document.getElementById('font-size-control');

const text = document.getElementById('text');

inputRange.addEventListener('input', () => {
  text.style.fontSize = `${inputRange.value}px`;
});

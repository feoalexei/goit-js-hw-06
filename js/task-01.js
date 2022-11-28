const categoriesList = document.getElementById('categories');

console.log(`Number of categories: ${categoriesList.children.length}`);
console.log('');

const categoriesItems = categoriesList.querySelectorAll('.item');

categoriesItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log('');
});

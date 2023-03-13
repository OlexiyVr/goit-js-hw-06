const categoriesList = document.querySelector('#categories');

// Визначення кількості категорій 
const categoriesNumber = categoriesList.children.length;
console.log(`Number of categories: ${categoriesNumber}`);


categoriesList.querySelectorAll('li.item').forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementsNumber = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsNumber}`);
});
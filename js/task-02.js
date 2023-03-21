const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listingredients = document.querySelector('#ingredients');

const ingredientsElem = ingredients.map(ingredient => {
  const prod = document.createElement(`li`);
  prod.textContent = ingredient;
  prod.classList.add(`item`);

  return prod;
});

listingredients.append(...ingredientsElem)
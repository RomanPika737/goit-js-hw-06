const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
// console.log(list);

// const items = ingredients.map(ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   return item;
// });

// list.append(...items);


const createElements = ingredients => {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    return item;
  });
};

const elements = createElements(ingredients);
list.append(...elements);






// const list = document.querySelector('#ingredients');

// const result = ingredients.map(ingredient => {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   return li;
// }).reduce((accumulator, currentElement) => {
//   accumulator.append(currentElement);
//   return accumulator;
// });

// list.append(result);
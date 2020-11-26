const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
let items = [];
ingredients.map(element => {
    let createLi = document.createElement('li');
    createLi.textContent = element;

    items.push(createLi);

});
//console.log(items)
document.getElementById('ingredients').append(...items)
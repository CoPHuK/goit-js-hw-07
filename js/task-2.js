const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let items = ingredients.map(element => {
  let CreateLi = document.createElement('li')
  CreateLi.textContent = element
  return CreateLi;
}
)

document.getElementById('ingredients').append(...items)


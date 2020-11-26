const elementCounter = categories.children
const categoriesDescription = document.querySelectorAll(".item")

console.log(`В коллекции ${elementCounter.length} элементов`)
categoriesDescription.forEach(function(element){
    console.log(`Категория: ${element.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${element.lastElementChild.children.length}`)
})


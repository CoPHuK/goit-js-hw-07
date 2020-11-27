const valueRef = document.getElementById('value')
console.dir(valueRef)
const decrementBtnRef = document.querySelector('button[data-action="decrement"]')
console.log(decrementBtnRef);
const incrementBtnRef = document.querySelector('button[data-action="increment"]')
console.log(incrementBtnRef);

const incrementFn = function () { 
    let counterValue = Number(valueRef.textContent)
    counterValue += 1;
    valueRef.textContent=counterValue
    
}

const decrementFn = function () { 
    let counterValue = Number(valueRef.textContent)
    counterValue -= 1;
    valueRef.textContent=counterValue
    
}

decrementBtnRef.addEventListener('click', decrementFn)
incrementBtnRef.addEventListener('click', incrementFn)

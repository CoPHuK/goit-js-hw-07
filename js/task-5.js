const inputRef = document.getElementById('name-input')
console.dir(inputRef)
const spanRef = document.getElementById('name-output')
console.log(spanRef);
const fun = function () { 
    if (inputRef.value != '') {
        spanRef.textContent = inputRef.value
    }
    else { 
        spanRef.textContent='Незнакомец'
    }    
}

inputRef.addEventListener('keydown', fun)

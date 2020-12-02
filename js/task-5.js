const inputRef = document.getElementById("name-input");
console.dir(inputRef);
const outputNameRef = document.getElementById("name-output");


inputRef.addEventListener('input',inputValue);

function inputValue(event) { 
  outputNameRef.textContent = inputRef.value === '' ? 'незнакомец' : event.currentTarget.value;
}
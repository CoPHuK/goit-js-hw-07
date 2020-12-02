const inputRef = document.getElementById("validation-input");
// console.log(inputRef);
// console.log(inputRef.dataset.length);


inputRef.addEventListener("blur", validation);


function validation () {
  let msgLenght = inputRef.value.length;
  let msgLengthValid = Number(inputRef.dataset.length);
  //   console.log(msgLenght);
  //   console.log(msgLengthValid);
  if (msgLenght === 0) {
    inputRef.classList.remove("valid", "invalid");
    return;
  }
  msgLenght === msgLengthValid
    ? (inputRef.classList.add("valid"), inputRef.classList.remove("invalid"))
    : (inputRef.classList.add("invalid"), inputRef.classList.remove(valid));
};
const rangeRef = document.querySelector("#font-size-control");
// console.log(rangeRef);
const textRef = document.querySelector("#text");
// console.log(textRef);
const fun = () => {
  textRef.style.fontSize = rangeRef.value + "px";
};
rangeRef.addEventListener("input", fun);

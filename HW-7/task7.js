const inputRange = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const handleInput = (e) => {
  console.log(e.target.value);
  textEl.style.fontSize = e.currentTarget.value + "px";
};
inputRange.addEventListener("input", handleInput);

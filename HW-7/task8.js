const inputEl = document.querySelector("input");
const btnEl = document.querySelectorAll("button");
const divEl = document.querySelector("#boxes");

let amountFromInput = 0;
let boxes = [];
function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    let width = 30 + i * 10;
    const divEls = document.createElement("div");
    divEls.style.backgroundColor = randColor();
    divEls.style.width = width + "px";
    divEls.style.height = width + "px";
    divEls.style.margin = "5px";
    divEl.appendChild(divEls);
  }
};
function onBtnClick(event) {
  const { action } = event.currentTarget.dataset;
  switch (action) {
    case "render":
      console.log(action);
      console.log(amountFromInput);
      createBoxes(amountFromInput);
      break;
    case "destroy":
      divEl.innerHTML = "";
  }
}
function inputCheck(e) {
  amountFromInput = e.target.value;
  return amountFromInput;
}
btnEl.forEach((e) => e.addEventListener("click", onBtnClick));
inputEl.addEventListener("input", inputCheck);

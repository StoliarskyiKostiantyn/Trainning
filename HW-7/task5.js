const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", hadleInput);
function hadleInput(e) {
  if (e.target.value === "") {
    spanEl.textContent = "Незгакомец";
  } else {
    spanEl.textContent = e.target.value;
  }
}

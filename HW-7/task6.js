const inputEl = document.querySelector("#validation-input");

const changeInputClass = (input, classToChange, classToAdd) => {
  input.classList.remove(classToChange);
  input.classList.add(classToAdd);
};

inputEl.addEventListener("blur", checkInput);
function checkInput(e) {
  if (e.target.value.length >= Number(e.target.dataset.length)) {
    changeInputClass(inputEl, "invalid", "valid");
  } else {
    changeInputClass(inputEl, "valid", "invalid");
  }
}

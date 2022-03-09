const valueEl = document.querySelector("#value");
const btn = document.querySelectorAll("#counter button");

btn.forEach((e) => e.addEventListener("click", handleClick));

function handleClick(e) {
  const spanValue = Number(valueEl.textContent);
  switch (e.currentTarget.dataset.action) {
    case "increment":
      valueEl.textContent = spanValue + 1;
      return spanValue;
    case "decrement":
      valueEl.textContent = spanValue - 1;
      return spanValue;
    default:
      break;
  }
}

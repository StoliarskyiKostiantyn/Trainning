const ulEl = document.querySelector("#ingredients");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

ingredients.map((e) => {
  const liItem = document.createElement("li");
  liItem.textContent = e;
  ulEl.appendChild(liItem);
});

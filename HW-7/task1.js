const categoriesEl = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");

console.log(`В списке ${categoriesEl.childElementCount} категории`);
itemEl.forEach((e) => {
  console.log(`Категории: ${e.querySelector("h2").textContent}`);
  console.log(`Количество єлементов:${e.querySelectorAll("li").length}`);
});

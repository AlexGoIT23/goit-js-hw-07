const categories = document.querySelector("#categories");
const itemH2 = document.querySelectorAll("h2");
// console.log(itemH2);

// console.log(categories);
const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);

item.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});

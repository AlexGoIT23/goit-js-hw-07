const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");
const body = document.querySelector("body");

const newGallery = (images) => {
  return images
    .map(
      ({ url, alt }) => `
  <li><img src="${url}" alt="${alt}" width=500px height=300px></img></li>`
    )
    .join("");
};

body.insertAdjacentHTML(
  "afterbegin",
  "<h2>Натисни галерею для зміни кольору!</h2>"
);

gallery.insertAdjacentHTML("beforeend", newGallery(images));

gallery.style.cursor = "pointer";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "80px";
gallery.style.listStyleType = "none";
gallery.style.paddingLeft = "300px";
gallery.style.paddingRight = "300px";
gallery.style.paddingTop = "50px";
gallery.style.paddingBottom = "50px";

gallery.addEventListener("click", changeColor);
function changeColor() {
  gallery.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(gallery);

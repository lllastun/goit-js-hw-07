import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createLiElem(image) {
  const { preview: smallImg, original: bigImg, description: descriptionImg } = image;

  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");

  li.classList.add("gallery__item");
  a.classList.add("gallery__link");
  img.classList.add("gallery__image");

  a.setAttribute("href", bigImg);
  img.setAttribute("src", smallImg);
  img.setAttribute("data-source", bigImg);
  img.setAttribute("alt", descriptionImg);

  a.append(img);
  li.append(a);
  return li;
}

const galleryArray = [];
const ulElement = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  galleryArray.push(createLiElem(galleryItems[i]));
}
ulElement.prepend(...galleryArray);

ulElement.addEventListener("click", (event) => {
  event.preventDefault();
  const bigImg = event.target.dataset.source;

  if (event.currentTarget !== event.target) {
    const instance = basicLightbox.create(`
    <img src="${bigImg}" width="800" height="600">
    `);
    instance.show();

    document.addEventListener("keydown", (event) => {
      if (event.code == "Escape") {
        instance.close();
      }
    });
  }
});


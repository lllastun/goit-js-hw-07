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
  img.setAttribute("alt", descriptionImg);
  img.setAttribute("title", descriptionImg);

  a.append(img);
  li.append(a);
  return li;
}

const galleryArray = [];
const ulElement = document.querySelector(".gallery");
const options = {
  captionDelay: 250,
};

for (let i = 0; i < galleryItems.length; i++) {
  galleryArray.push(createLiElem(galleryItems[i]));
}
ulElement.prepend(...galleryArray);

ulElement.addEventListener("click", (event) => {
  event.preventDefault();
    let gallery = new SimpleLightbox(".gallery a", options);
    gallery.on();
});

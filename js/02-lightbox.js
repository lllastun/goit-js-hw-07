import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createLiElem(image) {
  const { preview: smallImg, original: bigImg, description: descriptionImg } = image;

  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");

  return `<li class="gallery__item"> 
      <a class='gallery__link' href="${bigImg}">
        <img class="gallery__image" src="${smallImg}" alt="${descriptionImg}" />
      </a> 
    </li>
     `;
}

const galleryArray = [];
const ulElement = document.querySelector(".gallery");
const options = {
  captionsData: "alt",
  captionDelay: 250,
};

for (let i = 0; i < galleryItems.length; i++) {
  galleryArray.push(createLiElem(galleryItems[i]));
}
const insertedString = galleryArray.join("");
ulElement.innerHTML = insertedString;

ulElement.addEventListener("click", (event) => {
  event.preventDefault();
  let gallery = new SimpleLightbox(".gallery a", options);
  gallery.on('');
});

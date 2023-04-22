import { galleryItems } from "./gallery-items.js";
// Change code below this line

// function createLiElem(image) {
//   const { preview: smallImg,
//          original: bigImg,
//          description: descriptionImg } = image;

//   const li = document.createElement("li");
//   const a = document.createElement("a");
//   const img = document.createElement("img");

//   li.classList.add("gallery__item");
//   a.classList.add("gallery__link");
//   img.classList.add("gallery__image");

//   a.setAttribute("href", bigImg);
//   img.setAttribute("src", smallImg);
//   img.setAttribute("data-source", bigImg);
//   img.setAttribute("alt", descriptionImg);

//   a.append(img);
//   li.append(a);
//   return li;
// }

function createLiElem(image) {
  const { preview: smallImg, original: bigImg, description: descriptionImg } = image;

  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");

  return `<li class="gallery__item">
  <a class="gallery__link" href="${bigImg}">
    <img
      class="gallery__image"
      src="${smallImg}"
      data-source="${bigImg}"
      alt="${descriptionImg}"
    />
  </a>
</li>`;
}

const galleryArray = [];
const ulElement = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  galleryArray.push(createLiElem(galleryItems[i]));
}

const insertedString = galleryArray.join("");
// ulElement.prepend(...galleryArray);
ulElement.innerHTML = insertedString;

ulElement.addEventListener("click", (event) => {
  event.preventDefault();
  const bigImg = event.target.dataset.source;

  // if (event.currentTarget !== event.target) {
  if (event.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`
    <img src="${bigImg}" width="800" height="600">
    `);
    // {
    //   onShow: (instance) => {
    //     document.addEventListener('keydown', escKeyPress)
    //   },
    //   onClose: (instance) => {
    //     document.removeEventListener('keydown', escKeyPress)
    //   },
    // }
    instance.show();

    function escKeyPress(event) {
      if (event.code == "Escape") {
        instance.close();
        document.removeEventListener("keydown", escKeyPress);
      }
    }
    document.addEventListener("keydown", escKeyPress);
  }
});

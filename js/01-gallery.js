import { galleryItems } from './gallery-items.js';
// Change code below this line

function createLiElem(image) {
  const {
    preview: smallImg,
    original: bigImg,
    description: descriptionImg,
  } = image;

  const li = document.createElement('li'); 
  const  a = document.createElement('a'); 
  const img= document.createElement('img');

  li.classList.add("gallery__item");
  a.classList.add("gallery__link");
  img.classList.add("gallery__image");

  a.setAttribute('href', bigImg);
  img.setAttribute('src', smallImg, 'data-source', bigImg, 'alt', descriptionImg);
  img.setAttribute('data-source', bigImg);
  img.setAttribute('alt', descriptionImg);
  
  a.append(img);
  li.append(a);
  // console.log(li);
  // console.log(smallImg, bigImg, descriptionImg);
  return li;
}

// createLiElem(galleryItems[0])
// // console.log(galleryItems);
const ulElement = document.querySelector('.gallery');
// ulElement.prepend(createLiElem(galleryItems[0]));
for (let i = 0; i < galleryItems.length; i++) {
ulElement.prepend(createLiElem(galleryItems[i]));
}

ulElement.addEventListener('click', () => {
const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()
})

// ulElement.prepend(createLiElem(galleryItems[1]));
// ulElement.prepend()
// const createAllLiElem = (galleryItems.map(obj => createLiElem(obj))).join('')
// console.log(JSON.stringify

// ulElement.insertAdjacentHTML('afterbegin', createLiElem(galleryItems[0]);

// console.log(createLiElem(galleryItems[0]));

// galleryItems.forEach(image => createImage(image))

// console.log(ulElement);

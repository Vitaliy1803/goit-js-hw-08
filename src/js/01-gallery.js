import simpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const itemsGallery = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');


galleryContainer.insertAdjacentHTML('beforeend', itemsGallery);

const lightbox = new simpleLightbox ('.gallery, a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

galleryContainer.style.listStyle = "none";

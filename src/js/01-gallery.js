// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createMarkupGalleryImg(gallery) {
  const galleryImg = gallery
    .map(({ preview, original, description }) => {
      return `<li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li> `;
    })
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', galleryImg);
}
createMarkupGalleryImg(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createGallery = (items) => {
  return items
    .map(
      (item) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>
    `
    )
    .join('');
};

const clickOnImage = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
  `);
  instance.show();

  gallery.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
};

gallery.innerHTML = createGallery(galleryItems);
gallery.addEventListener('click', clickOnImage);


import {onCardClick} from './full-photo-click-handler.js';

const renderPhotoArray = (photoArray) => {
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const pictureContainer = document.querySelector('.pictures');
  const photosFragment = document.createDocumentFragment();

  photoArray.forEach((photo) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.pictureId = photo.id;
    pictureElement.querySelector('.picture__img').src = photo.url;
    pictureElement.querySelector('.picture__img').alt = photo.description;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photosFragment.appendChild(pictureElement);
  });

  pictureContainer.appendChild(photosFragment);

  pictureContainer.addEventListener('click', (evt) => onCardClick(evt, photoArray));
};

export {renderPhotoArray};

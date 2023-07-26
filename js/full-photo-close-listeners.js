import {isEscapeKey} from './util.js';
import {bigPicture} from './full-photo-click-handler.js';
let hideBigPicture = () => {};
const hideBigPictureByKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    hideBigPicture();
  }
};

hideBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', hideBigPictureByKeydown);
};

const hideBigPictureByClick = () => {
  hideBigPicture();
};

export {hideBigPictureByKeydown, hideBigPictureByClick};

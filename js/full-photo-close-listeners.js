import {isEscapeKey} from './util.js';
import {bigPicture} from './mini-photo-click-handler.js';

const overlay = document.querySelector('.overlay');

let hideBigPicture = () => {};
const onKeydownHideBigPicture = (evt) => {
  if (isEscapeKey(evt)) {
    hideBigPicture();
  }
};

hideBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onKeydownHideBigPicture);
};

overlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('overlay')) {
    hideBigPicture();
  }
});

const onCloseButtonClickHideBigPicture = () => {
  hideBigPicture();
};

export {onKeydownHideBigPicture, onCloseButtonClickHideBigPicture};

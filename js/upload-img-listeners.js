import {isClick, isEscapeKey} from './util.js';

const createUploadImageHandler = (uploadContainer, form, pristineReset, cancel) => () => {
  document.body.classList.add('modal-open');
  uploadContainer.classList.remove('hidden');
  form.reset();
  pristineReset.reset();

  const removeOverlayListeners = (hideContainer) => {
    document.body.classList.remove('modal-open');
    uploadContainer.classList.add('hidden');
    document.removeEventListener('keydown', hideContainer);
    cancel.removeEventListener('click', hideContainer);
  };

  const hideOverlay = (evt) => {
    if (isClick(evt)) {
      removeOverlayListeners(hideOverlay);
    }

    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeOverlayListeners(hideOverlay);
    }
  };

  cancel.addEventListener('click', hideOverlay);
  document.addEventListener('keydown', hideOverlay);
}

export {createUploadImageHandler};

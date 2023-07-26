import {disableEscHandling} from './util.js';
import {createUploadImageHandler} from './upload-img-listeners.js';
import {createValidation} from './upload-validation.js';
import {createScaleControlling} from './upload-scale-contol.js';
import {addEffectsControl} from './upload-effects.js';
import {sendData} from './load-data.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadImageInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const cancelUploadButton = uploadForm.querySelector('.img-upload__cancel');
const hashTagInput = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');
const scaleContainer = uploadForm.querySelector('.img-upload__scale');
const decreaseScaleButton = scaleContainer.querySelector('.scale__control--smaller');
const increaseScaleButton = scaleContainer.querySelector('.scale__control--bigger');
const scaleControlValue = scaleContainer.querySelector('.scale__control--value');
const imageToUpload = uploadForm.querySelector('.img-upload__preview img');
const sliderControlContainer = uploadForm.querySelector('.effect-level');
const effectsList = uploadForm.querySelector('.effects__list');
const effectValue = uploadForm.querySelector('.effect-level__value');
const submitButton = uploadForm.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Опубликовываю...'
};


const defaultConfig = {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__help'
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const closeUploadFormModal = () => {
  document.body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');

  /*
  Как сюда добавить?
    const removeOverlayListeners = (hideContainer) => {
    document.body.classList.remove('modal-open');
    uploadContainer.classList.add('hidden');
    document.removeEventListener('keydown', hideContainer);
    cancel.removeEventListener('click', hideContainer);
    form.reset();
    pristineReset.reset();
  };
   */
};

// const setUserFormSubmit = () => {

const initUploadImageForm = () => {
  createScaleControlling(scaleControlValue, imageToUpload, decreaseScaleButton, increaseScaleButton);
  addEffectsControl(sliderControlContainer, effectValue, imageToUpload, effectsList);

  disableEscHandling(hashTagInput);
  disableEscHandling(commentField);
  const pristine = new Pristine(uploadForm, defaultConfig);

  const uploadImage = createUploadImageHandler(uploadOverlay, uploadForm, pristine, cancelUploadButton);

  uploadImageInput.addEventListener('change', uploadImage);

  createValidation(hashTagInput, commentField, pristine);
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(closeUploadFormModal)
        .catch(
          (err) => {
            alert(err.message);
          }
        )
        .finally(unblockSubmitButton);
    } else {
      console.log('Форма невалидна');
    }
  });
};
// };

export {initUploadImageForm};

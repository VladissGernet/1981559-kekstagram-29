import {SCALE_IMAGE_DEFAULT, SCALE_IMAGE_MAX, SCALE_IMAGE_MIN, SCALE_IMAGE_STEP} from './constats.js';

const transformImage = (scalableImage, scalingValue) => {
  const percentToMath = 100;
  scalableImage.style.transform = `scale(${scalingValue / percentToMath})`;
};

const createScaleControlling = (controlValue, image, increase, decrease) => {
  console.log('puk');
  controlValue.value = `${SCALE_IMAGE_DEFAULT}%`;
  let currentValue = parseInt(controlValue.value, 10);
  transformImage(image, currentValue);

  const decreaseValue = () => {
    if (currentValue > SCALE_IMAGE_MIN) {
      currentValue -= SCALE_IMAGE_STEP;
      controlValue.value = `${currentValue}%`;
      transformImage(image, currentValue);
    }
  };

  const increaseValue = () => {
    if (currentValue < SCALE_IMAGE_MAX) {
      currentValue += SCALE_IMAGE_STEP;
      controlValue.value = `${currentValue}%`;
      transformImage(image, currentValue);
    }
  };

  increase.addEventListener('click', decreaseValue);
  decrease.addEventListener('click', increaseValue);
};

export {createScaleControlling};

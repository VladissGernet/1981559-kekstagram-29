const ALERT_SHOW_TIME = 5000;

/**
 * @param {string} message
 */
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '16px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const pluralize = (count, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${count} ${words[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)]]}`;
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const isClick = (evt) => evt.type === 'click';

const disableEscHandling = (element) => {
  element.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
};

const checkRepeat = (arr) => {
  const uniqueArr = new Set(arr);
  return arr.length === uniqueArr.size;
};

export {isEscapeKey, isClick, disableEscHandling, checkRepeat, pluralize, showAlert};

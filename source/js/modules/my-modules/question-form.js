import {initPhoneInput} from '../form-validate/init-phone-input';

function initFormNumberValidator() {
  const numberContainers = document.querySelectorAll('[data-phone-validate]');

  numberContainers.forEach((numberContainer) => {
    initPhoneInput(numberContainer);
  });
}

export {
  initFormNumberValidator
};

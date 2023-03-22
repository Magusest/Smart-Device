import {Form} from '../form-validate/form';

const form = new Form();

function initFormValidate() {
  const formComponents = document.querySelectorAll('[data-form-validate]');
  const numberContainers = document.querySelectorAll('[data-phone-validate]');
  const success = document.querySelector('[data-success]');

  const hideSuccess = () => {
    success.style.display = 'none';
    document.body.style.overflow = '';
  };

  const onDocumentKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideSuccess();
    }
  };

  const showSuccess = () => {
    success.style.display = 'block';
    success.addEventListener('click', hideSuccess);
    setTimeout(hideSuccess, 5000);
  };

  numberContainers.forEach((numberContainer) => {
    form.initPhoneInput(numberContainer);
  });

  formComponents.forEach((formComponent) => {
    formComponent.addEventListener('submit', (evt) => {
      evt.preventDefault();
      document.body.style.overflow = 'hidden';
      setTimeout(showSuccess(), 1000);
      formComponent.reset();
    });
  });

  document.addEventListener('keydown', onDocumentKeyDown);
}


export {
  initFormValidate
};

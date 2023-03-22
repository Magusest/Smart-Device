import {Form} from '../form-validate/form';

const form = new Form();

function initFormValidate() {
  const formComponents = document.querySelectorAll('[data-form-validate]');
  const numberContainers = document.querySelectorAll('[data-phone-validate]');
  const success = document.querySelector('[data-success]');
  console.log(formComponents);

  const hideSuccess = () => {
    success.style.display = 'none';
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
  };

  numberContainers.forEach((numberContainer) => {
    form.initPhoneInput(numberContainer);
  });

  formComponents.forEach((formComponent) => {
    formComponent.addEventListener('submit', (evt) => {
      evt.preventDefault();
      showSuccess();
      console.log('work');
    });
  });

  document.addEventListener('keydown', onDocumentKeyDown);
}


export {
  initFormValidate
};

import { FocusLock } from '../modals/focus-lock';

const popUpOpenButton = document.querySelector('[data-popup-button]');
const popUpCloseButton = document.querySelector('[data-popup-button="close"]');
const popUp = document.querySelector('[data-popup]');
const inputName = document.querySelector('[data-popup-name]');
const focusLock = new FocusLock();


function showPopUp() {

  const hidePopUp = () => {
    popUp.style.opacity = '0';
    popUp.style.zIndex = '-10';
    // document.body.style.overflow = '';
    focusLock.unlock();
  };

  const closeButtonHendler = () => {
    popUpCloseButton.addEventListener('click', () => {
      hidePopUp();
    });
  };

  const onDocumentKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hidePopUp();
    }
  };

  const unscrollHandler = (e) => {
    if (e.target === popUp) {
      hidePopUp();
    }
  };

  const openButtonHendler = () => {
    popUp.style.opacity = '1';
    popUp.style.zIndex = '10';
    document.body.style.overflow = 'hidden';
    focusLock.lock('[data-popup]');
    inputName.focus();
    popUp.addEventListener('click', unscrollHandler);
    closeButtonHendler();
  };

  popUpOpenButton.addEventListener('click', openButtonHendler);
  document.addEventListener('keydown', onDocumentKeyDown);
  popUp.addEventListener('submit', hidePopUp);
}

export {
  showPopUp
};

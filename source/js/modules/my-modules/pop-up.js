const popUpOpenButton = document.querySelector('[data-popup-button]');
const popUpCloseButton = document.querySelector('[data-popup-button="close"]');
const popUp = document.querySelector('[data-popup]');
const popUpModal = document.querySelector('.pop-up__wrapper');


function showPopUp() {

  const hidePopUp = () => {
    popUp.style.opacity = '0';
    popUp.style.zIndex = '-10';
    document.body.style.overflow = '';
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

  const openButtonHendler = () => {
    popUp.style.opacity = '1';
    popUp.style.zIndex = '10';
    document.body.style.overflow = 'hidden';
    closeButtonHendler();
  };

  popUpOpenButton.addEventListener('click', openButtonHendler);
  document.addEventListener('keydown', onDocumentKeyDown);
}

export {
  showPopUp
};

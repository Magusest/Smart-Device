const popUpOpenButton = document.querySelector('[data-popup-button]');
const popUpCloseButton = document.querySelector('[data-popup-button="close"]');
const popUp = document.querySelector('[data-popup]');


function showPopUp() {
  const closeButtonHendler = () => {
    popUpCloseButton.addEventListener('click', () => {
      popUp.style.opacity = '0';
      popUp.style.zIndex = '-10';
    });
  };

  const openButtonHendler = () => {
    popUp.style.opacity = '1';
    popUp.style.zIndex = '10';
    closeButtonHendler();
  };

  popUpOpenButton.addEventListener('click', openButtonHendler);
}

export {
  showPopUp
};

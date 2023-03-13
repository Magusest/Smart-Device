const popUpOpenButton = document.querySelector('[data-popup-button]');
const popUpCloseButton = document.querySelector('[data-popup-button="close"]');
const popUp = document.querySelector('[data-popup]');


function showPopUp() {
  const closeButtonHendler = () => {
    popUpCloseButton.addEventListener('click', () => {
      popUp.style.left = '100%';
    });
  };

  const openButtonHendler = () => {
    popUp.style.left = '0';
    closeButtonHendler();
  };

  popUpOpenButton.addEventListener('click', openButtonHendler);
}

export {
  showPopUp
};

function showText() {
  const buttonAbout = document.querySelector('[data-button-about]');
  const hiddenTexts = document.querySelectorAll('[data-hidden-text]');

  buttonAbout.addEventListener('click', () => {
    hiddenTexts.forEach((text) => {
      if (text.style.display === 'inline') {
        text.style.display = 'none';
        buttonAbout.textContent = 'подробнее';
      } else {
        text.style.display = 'inline';
        buttonAbout.textContent = 'Свернуть';
      }
    });
  });
}

export {
  showText
};

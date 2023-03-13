function showMenu() {
  const menuButtonNav = document.querySelector('[data-button-menu]');
  const menuButtonCont = document.querySelector('[data-button-menu="contacts"]');
  const menuNav = document.querySelectorAll('[data-menu]');

  const openedMenuHendler = () => {
    menuNav.forEach((menu) => {
      menu.style.maxHeight = null;
    });
  };

  menuButtonNav.addEventListener('click', () => {
    const menu = menuButtonNav.nextElementSibling;
    if (menu.style.maxHeight) {
      openedMenuHendler();
      menuButtonNav.classList.toggle('nav__title--closed');
    } else {
      openedMenuHendler();
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menuButtonNav.classList.toggle('nav__title--closed');
    }
  });

  menuButtonCont.addEventListener('click', () => {
    const menu = menuButtonCont.nextElementSibling;
    if (menu.style.maxHeight) {
      openedMenuHendler();
      menuButtonCont.classList.toggle('nav__title--closed');
    } else {
      openedMenuHendler();
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menuButtonCont.classList.toggle('nav__title--closed');
    }
  });

}

export {
  showMenu
};

window.onload = function () {
  const menuButton = document.querySelector('.menu-button');
  const headerMenu = document.querySelector('.header__menu');

  function handleToggleMenu() {
    if (!headerMenu.classList.contains('state')) {
      // As the menu becomes visible
      headerMenu.classList.add('fade-in');
      headerMenu.classList.remove('fade-out');
      headerMenu.classList.add('state');
    } else {
      // As the menu becomes invisible
      headerMenu.classList.remove('fade-in');
      headerMenu.classList.add('fade-out');
      headerMenu.classList.remove('state');
    }
  }

  menuButton.addEventListener('click', handleToggleMenu);
};
// const urlRegex = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;
const urlRegex = new RegExp(
  /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s/?.#-]+\.?)+(\/[^\s]*)?$/i
);
export { urlRegex };

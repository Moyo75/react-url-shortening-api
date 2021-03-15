window.onload = function () {
  const menuButton = document.querySelector('.menu-button');
  const headerMenu = document.querySelector('.header__menu');
  const copyButton = document.querySelector('.copy__button');
  const shortenedLink = document.querySelector('.shortened__link');

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

  function handleCopyButton(event) {
    event.preventDefault();

    const selection = window.getSelection();
    const range = new Range();
    console.log(range);
    range.selectNodeContents(shortenedLink);

    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      copyButton.style.backgroundColor = '#3B3054';
      copyButton.textContent = 'Copied!';

      setTimeout(() => {
        copyButton.style.backgroundColor = '#2ACFCF';
        copyButton.textContent = 'Copy';
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        copyButton.style.backgroundColor = '#f46262';
        copyButton.textContent = "Can't copy, hit Ctrl+C!";
      }, 2000);
    }

    // console.log(shortenedLink);
  }

  menuButton.addEventListener('click', handleToggleMenu);
  copyButton.addEventListener('click', handleCopyButton);
};

(() => {
  let active = 0;

  const pages = document.querySelectorAll('.page');

  document.addEventListener('click', (evt) => {
    const dir = evt.target.getAttribute('data-dir');

    switch (dir) {
      case 'next': {
        active = Math.min(active + 1, pages.length - 1);
        break;
      }
      case 'prev': {
        active = Math.max(active - 1, 0);
        break;
      }
      default:
        // Random click on the website. Don't do anything.
        return;
    }

    pages.forEach((el, index) => {
      if (index === active) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  });
})();

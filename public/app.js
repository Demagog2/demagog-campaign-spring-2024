(() => {
  let active = 0;

  const pages = document.querySelectorAll('.page');
  const charts = document.querySelectorAll('.animated-chart');

  const animateChart = (chart) => {
    const circle = chart.querySelector('.circle');
    const r = circle.getAttribute('r');

    const circleCircumference = 2 * Math.PI * r;
    const targetDistance = circleCircumference * chart.getAttribute('data-value') / 100.0;

    let currentDistance = 0;
    const step = () => {
      currentDistance += 2;

      // Updates SVG circle with new angle
      circle.setAttribute('stroke-dasharray', currentDistance + ', 2000');

      // Animate till we reach the desired angle
      if (currentDistance <= targetDistance) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const animateCakeCharts = () => {
    charts.forEach(animateChart);
  };

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

    if (active === 1) {
      animateCakeCharts();
    }
  });
})();

const modalElm = document.querySelector('.modal');
const modalBtnElm = document.querySelectorAll('.open-modal');
const closeModalElm = document.querySelector('.close');

modalBtnElm.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalElm.style.display = 'block';
    console.log(modalElm.style.display);
  });
});

const closeModal = () => {
  modalElm.style.display = 'none';
};

closeModalElm.addEventListener('click', () => closeModal());

// how to close modal on escape? or on click outside of the modal?

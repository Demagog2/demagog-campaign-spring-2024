const bckwBtnElm = document.querySelectorAll('.arrow-bckw-btn');

const fwdBtnElm = document.querySelectorAll('.arrow-fwd-btn');

const page1Elm = document.querySelector('.page-1');
const page2Elm = document.querySelector('.page-2');
const page3Elm = document.querySelector('.page-3');

const moveToPage1 = () => {
  page1Elm.style.display = 'block';
  page2Elm.style.display = 'none';
  page3Elm.style.display = 'none';
};

const moveToPage2 = () => {
  page1Elm.style.display = 'none';
  page2Elm.style.display = 'block';
  page3Elm.style.display = 'none';
};

const moveToPage3 = () => {
  page1Elm.style.display = 'none';
  page2Elm.style.display = 'none';
  page3Elm.style.display = 'block';
};

bckwBtnElm.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const movingToPage1 = e.target.classList.contains('arrow-bckw-btn-page2');
    const movingToPage2 = e.target.classList.contains('arrow-bckw-btn-page3');

    if (movingToPage1) {
      moveToPage1();
    } else if (movingToPage2) {
      moveToPage2();
    }
  });
});

fwdBtnElm.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const movingToPage2 = e.target.classList.contains('arrow-fwd-btn-page1');

    const movingToPage3 = e.target.classList.contains('arrow-fwd-btn-page2');

    if (movingToPage2) {
      moveToPage2();
    } else if (movingToPage3) {
      moveToPage3();
    }
  });
});

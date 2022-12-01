'use strict';

const button = document.querySelector('.btn_3');
const footer = document.querySelector('.footer');
const gizle = document.querySelector('.gizle');

button.addEventListener('click', function () {
  footer.classList.add('button_gallery');
});

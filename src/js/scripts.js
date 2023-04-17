
'use strict';

const IMAGE_NUM = 3;
const headerImageNum = Math.ceil(Math.random() * IMAGE_NUM);
const headerImage = document.getElementById('header-image');
const body = document.getElementById('body');

if (body.classList.contains('top')) {
  headerImage.src = `./src/img/bar/header-${headerImageNum}.png`;
} else if (body.classList.contains('lang-top')) {
  headerImage.src = `../src/img/bar/header-${headerImageNum}.png`;
} else {
  headerImage.src = `../../src/img/bar/header-${headerImageNum}.png`;
}


const loading = document.getElementById('loading');

window.onload = () => {
  body.style.opacity = 1.0;
  loading.style.opacity = 0.0;
  loading.style.display = 'none';
}

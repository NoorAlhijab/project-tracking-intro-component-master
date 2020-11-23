const hamburgerBtn = document.querySelector('#hamburger');
const navShow = document.querySelector('nav');
console.log(hamburgerBtn);
hamburgerBtn.addEventListener('click', function () {
  navShow.classList.toggle('show');
});

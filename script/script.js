window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('#burger__menu').classList.add('is-active');
  });
  document.querySelector('.burger__close').addEventListener('click', function() {
    document.querySelector('#burger__menu').classList.remove('is-active');
  })
});
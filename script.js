// script.js

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  var headerHeight = header.clientHeight;

  window.addEventListener('scroll', function() {
      if (window.scrollY > headerHeight) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  });
});
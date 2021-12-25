let navMain = document.querySelector(".main-nav");
let headerToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--open');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--open');
    }
})

headerToggle.onclick = function () {
  if (headerToggle.classList.contains('page-header__toggle--open')) {
    headerToggle.classList.remove('page-header__toggle--hide::before ');
    headerToggle.classList.add('page-header__toggle--open');
  } else {
    headerToggle.classList.remove('page-header__toggle--open')
    headerToggle.classList.add('page-header__toggle--hide::before ');
  }
}

headerToggle();

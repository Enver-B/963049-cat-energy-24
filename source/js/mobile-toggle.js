headerToggle.classList.remove('toggle-nav--nojs');

headerToggle.addEventListener('click', function () {
  if (headerToggle.classList.contains('page-header__toggle--hide')) {
    headerToggle.classList.remove('page-header__toggle--hide');
    headerToggle.classList.add('page-header__toggle--open');
  } else {
    headerToggle.classList.add('page-header__toggle--hide');
    headerToggle.classList.remove('page-header__toggle--open');
  }
})

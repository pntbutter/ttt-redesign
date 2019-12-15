// get elements
const $archiveWrap = document.querySelector('.js-archive');
const $toggle = $archiveWrap.querySelector('.js-archive-view-toggle');
const $list = $toggle.querySelector('.js-archive-list');
const $grid = $toggle.querySelector('.js-archive-grid');

// set grid as default
$archiveWrap.classList.add('archive--grid');
$grid.classList.add('d-none');
$grid.classList.remove('d-inline-flex');

$toggle.addEventListener('click', function(e) {
  if (e.target.matches('.js-archive-list')) {
    $archiveWrap.classList.remove('archive--grid');
    $archiveWrap.classList.add('archive--list');
    $grid.classList.remove('d-none');
    $grid.classList.add('d-inline-flex');
    $list.classList.add('d-none');
    $list.classList.remove('d-inline-flex');
  } else if (e.target.matches('.js-archive-grid')) {
    $archiveWrap.classList.remove('archive--list');
    $archiveWrap.classList.add('archive--grid');
    $list.classList.remove('d-none');
    $list.classList.add('d-inline-flex');
    $grid.classList.add('d-none');
    $grid.classList.remove('d-inline-flex');
  }
}, false);

//console.log($toggle, $list, $grid);
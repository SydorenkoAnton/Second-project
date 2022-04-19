var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*how-tabs*/
document.querySelectorAll('.how__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path
    document.querySelectorAll('.how__cards').forEach(function (tabContent) {
      tabContent.classList.remove('how__cards--active')
      document.querySelector(`[data-target="${path}"]`).classList.add('how__cards--active')
      document.querySelectorAll('.how__link').forEach(function(btn){
        btn.classList.remove('how__link--active')});
        e.currentTarget.classList.add('how__link--active');
    })
  })
})

/* burger */

const btn = document.querySelector('.header__burger')
const btnClose = document.querySelector('.burger__close')
const menu = document.querySelector('.burger__menu')

btn.addEventListener('click', () => {
  menu.classList.add('burger--active')
})

btnClose.addEventListener('click', () => {
  menu.classList.remove('burger--active')
})

/* search */

const btnSearch = document.querySelector('.header__link-search')
const btnCloseSearch = document.querySelector('.header__search-close')
const menuSearch = document.querySelector('.header__search-menu')

btnSearch.addEventListener('click', () => {
  menuSearch.classList.add('search--active')
})

btnCloseSearch.addEventListener('click', () => {
  menuSearch.classList.remove('search--active')
})

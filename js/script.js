import { toggleActiveClass, removeActiveClass } from './helpers.js'

const navbarNav = document.querySelector('.navbar-nav')
const hamburgerButton = document.querySelector('#hamburger-menu')
const searchForm = document.querySelector('.search-form')
const searchInput = document.querySelector('#search-box')
const searchButton = document.querySelector('#search-button')
const shoppingCart = document.querySelector('.shopping-cart')
const shoppingCartButton = document.querySelector('#shopping-cart-button')
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailButtons = document.querySelectorAll('.item-detail-button')
const itemDetailCloseButton = document.querySelector('.modal .close-icon')

toggleActiveClass(hamburgerButton, navbarNav)
toggleActiveClass(searchButton, searchForm, () => {
  searchInput.focus()
})
toggleActiveClass(shoppingCartButton, shoppingCart)

document.onclick = (e) => {
  removeActiveClass(e, hamburgerButton, navbarNav)
  removeActiveClass(e, searchButton, searchForm)
  removeActiveClass(e, shoppingCartButton, shoppingCart)
}

itemDetailButtons.forEach((btn) => {
  btn.onclick = () => {
    itemDetailModal.style.display = 'flex'
  }
})

itemDetailCloseButton.onclick = () => {
  itemDetailModal.style.display = 'none'
}

window.onclick = (e) => {
  if (e.target === itemDetailModal) itemDetailModal.style.display = 'none'
}

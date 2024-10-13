import { toggleActiveClass, removeActiveClass } from './helpers.js'

const navbarNav = document.querySelector('.navbar-nav')
const hamburgerButton = document.querySelector('#hamburger-menu')
const searchForm = document.querySelector('.search-form')
const searchInput = document.querySelector('#search-box')
const searchButton = document.querySelector('#search-button')

toggleActiveClass(hamburgerButton, navbarNav)
toggleActiveClass(searchButton, searchForm, () => {
  searchInput.focus()
})

document.onclick = (e) => {
  removeActiveClass(e, hamburgerButton, navbarNav)
  removeActiveClass(e, searchButton, searchForm)
}

const navbarNav = document.querySelector('.navbar-nav')
const hamburgerMenu = document.querySelector('#hamburger-menu')
const searchForm = document.querySelector('.search-form')
const searchInput = document.querySelector('#search-box')
const searchButton = document.querySelector('#search-button')

// Toggle `active` class for hamburger menu
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active')
}

// Toggle `active` class for search form
searchButton.onclick = () => {
  searchForm.classList.toggle('active')
  searchInput.focus()
}

// Remove `active` class when we click on all elements except the elements mentioned in the if statement
document.onclick = (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active')
  }
}

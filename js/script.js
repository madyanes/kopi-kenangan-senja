const navbarNav = document.querySelector('.navbar-nav')
const hamburgerMenu = document.querySelector('#hamburger-menu')

// Toggle `active` class
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active')
}

// Remove `active` class when we click on all elements except `hamburgerMenu` and `navbarNav`
document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove('active')
})

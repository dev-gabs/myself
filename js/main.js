window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  openedNav()
}

function openedNav() {
  const navbar = document.querySelector('nav')

  if (scrollY > 0) {
    navbar.classList.add('opened')
  } else {
    navbar.classList.remove('opened')
  }
}
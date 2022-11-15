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

// Actions on icons

const musicIcon = document.getElementById("music")
const devIcon = document.getElementById("dev")
const designIcon = document.getElementById("design")
const engeneeringIcon = document.getElementById("engeneering")
const printIcon = document.getElementById("print")

const icon = document.querySelectorAll(".menuIcon")

for (element of icon) {
  element.addEventListener('click', function () {
    for (element of icon) {
      element.classList.remove("active")

      let section = document.querySelector(`div.${element.id + "Section"}`)

      section.classList.remove('active')
    }
    this.classList.add("active")

    let section = document.querySelector(`div.${this.id + 'Section'}`)
  
    setTimeout(function(){
      section.classList.add('active')
    }, 200)
  })
}



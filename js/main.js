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

const musicIcon = document.getElementById('music')
const devIcon = document.getElementById('dev')
const designIcon = document.getElementById('design')
const engeneeringIcon = document.getElementById('engeneering')
const printIcon = document.getElementById('print')

const icon = document.querySelectorAll('.menuIcon')

const skillsInstruction = document.getElementById('skillsInstruction')

for (element of icon) {
  element.addEventListener('click', function () {
    for (element of icon) {
      element.classList.remove('active')

      // Finds the icons sections \/

      let section = document.querySelector(`div.${element.id + 'Section'}`)

      section.classList.remove('active')
    }

    this.classList.add('active')

    // Finds the especific icon section \/

    let section = document.querySelector(`div.${this.id + 'Section'}`)

    section.classList.add('active')

    skillsInstruction.textContent = capitalizeFirstLetter(this.id)
    skillsInstruction.style.color = "white"
  })
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

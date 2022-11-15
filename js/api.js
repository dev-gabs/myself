const devSection = document.querySelector('div.devSection')

axios.get('http://api.github.com/users/dev-gabs/repos?sort=created').then(d => {
  const reposArray = d.data

  for (repo of reposArray) {
    createPost()
  }
})

function createPost() {
  // Create post elements

  let post = document.createElement('section')
  post.classList.add('post')

  let repoInfos = document.createElement('div')
  repoInfos.classList.add('infos')

  let repoName = document.createElement('h2')
  repoName.textContent = repo.name

  let repoLanguage = document.createElement('h3')
  repoLanguage.textContent = repo.language

  let postDivision = document.createElement('div')
  postDivision.classList.add('border')

  let repoDescription = document.createElement('p')
  repoDescription.textContent = repo.description

  let buttonDiv = document.createElement('div')
  buttonDiv.classList.add('actions')

  let pageButton = document.createElement('a')
  pageButton.setAttribute('href', `https://dev-gabs.github.io/${repo.name}`)
  pageButton.setAttribute('target', `_blank`)
  pageButton.textContent = 'Project Page'

  let gitButton = document.createElement('a')
  gitButton.classList.add('git')
  gitButton.setAttribute('href', `https://github.com/dev-gabs/${repo.name}`)
  gitButton.setAttribute('target', `_blank`)

  let gitIcon = document.createElement('img')
  gitIcon.setAttribute('src', './assets/github_icon.svg')

  // Appending all elements

  repoInfos.appendChild(repoName)
  repoInfos.appendChild(repoLanguage)
  repoInfos.appendChild(postDivision)
  repoInfos.appendChild(repoDescription)

  gitButton.appendChild(gitIcon)

  buttonDiv.appendChild(pageButton)
  buttonDiv.appendChild(gitButton)

  post.appendChild(repoInfos)
  post.appendChild(buttonDiv)

  devSection.appendChild(post)

  switch (repoLanguage.textContent) {
    case 'HTML':
      repoLanguage.style.color = '#e34c26'
      break
    case 'CSS':
      repoLanguage.style.color = '#00C2FF'
      break
    case 'JavaScript':
      repoLanguage.style.color = '#FFC700'
      break
    case 'TypeScript':
      repoLanguage.style.color = '#3178c6'
      break
  }
}
import curriculum from '../data/curriculum.json'

const blocks = curriculum['responsive-web-design'].blocks

const blocksArray = Object.values(blocks)
const [basicCss, basicHTML, flexbox, grid] = blocksArray

let cssPosition: number = 0
let htmlPosition: number = 0
let flexboxPosition: number = 0
let gridPosition: number = 0

let currentBlock: string

const videoIFrame = document.querySelector(
  '#challengeVid',
)! as HTMLIFrameElement
const prevButton = document.querySelector('#prev')! as HTMLButtonElement
const challengeVidBtn = document.querySelector('#challengeVidBtn')!
const nextButton = document.querySelector('#next')! as HTMLButtonElement
const topMenu = document.querySelector('.menu')!

interface VideoDisplayer {
  videoUrl: string
  display(theFrame: HTMLIFrameElement): void
}

class CodeSnippet implements VideoDisplayer {
  constructor(
    public title: string,
    public description: string,
    public instructions: string,
    public videoUrl: string,
  ) {}
  display(theFrame: HTMLIFrameElement): void {
    theFrame.src = this.videoUrl
  }
}

const basicCssSnippets = basicCss.challenges.map(
  (challenge: any) =>
    new CodeSnippet(
      challenge.title,
      challenge.description,
      challenge.instructions,
      challenge.videoUrl,
    ),
)

const basicHtmlSnippets = basicHTML.challenges.map(
  (challenge: any) =>
    new CodeSnippet(
      challenge.title,
      challenge.description,
      challenge.instructions,
      challenge.videoUrl,
    ),
)

const flexboxSnippets = flexbox.challenges.map(
  (challenge: any) =>
    new CodeSnippet(
      challenge.title,
      challenge.description,
      challenge.instructions,
      challenge.videoUrl,
    ),
)

const gridSnippets = grid.challenges.map(
  (challenge: any) =>
    new CodeSnippet(
      challenge.title,
      challenge.description,
      challenge.instructions,
      challenge.videoUrl,
    ),
)

const populateMenu = (arrayOfBlocks: any[]) => {
  arrayOfBlocks.forEach((block) => {
    const menuItem = document.createElement('li')
    const menuLink = document.createElement('a')
    menuLink.textContent = block?.meta?.name

    menuLink.addEventListener('click', () => {
      const allMenuLinks = document.querySelectorAll('.menu li a')
      allMenuLinks.forEach((link) => {
        link.classList.remove('active')
      })
      menuLink.classList.add('active')
      currentBlock = block?.meta?.name
      const snippet = getCurrentSnippet(currentBlock)
      if (snippet) {
        snippet.display(videoIFrame)
        challengeVidBtn.textContent = snippet.title
      }
    })

    menuItem.appendChild(menuLink)
    topMenu.appendChild(menuItem)
  })
}

populateMenu(blocksArray)

const getCurrentSnippet = (block: string) => {
  if (block === 'Basic CSS') {
    return basicCssSnippets[cssPosition]
  } else if (block === 'Basic HTML and HTML5') {
    return basicHtmlSnippets[htmlPosition]
  } else if (block === 'CSS Flexbox') {
    return flexboxSnippets[flexboxPosition]
  } else if (block === 'CSS Grid') {
    return gridSnippets[gridPosition]
  } else {
    return new CodeSnippet('', '', '', '')
  }
}

const updatePosition = (direction: string) => {
  if (currentBlock === 'Basic CSS') {
    if (direction === 'next') {
      if (cssPosition < basicCssSnippets.length - 1) {
        cssPosition++
      }
    } else {
      if (cssPosition > 0) {
        cssPosition--
      }
    }
  }
  if (currentBlock === 'Basic HTML and HTML5') {
    if (direction === 'next') {
      if (htmlPosition < basicHtmlSnippets.length - 1) {
        htmlPosition++
      }
    } else {
      if (htmlPosition > 0) {
        htmlPosition--
      }
    }
  }
  if (currentBlock === 'CSS Flexbox') {
    if (direction === 'next') {
      if (flexboxPosition < flexboxSnippets.length - 1) {
        flexboxPosition++
      }
    } else {
      if (flexboxPosition > 0) {
        flexboxPosition--
      }
    }
  }
  if (currentBlock === 'CSS Grid') {
    if (direction === 'next') {
      if (gridPosition < gridSnippets.length - 1) {
        gridPosition++
      }
    } else {
      if (gridPosition > 0) {
        gridPosition--
      }
    }
  }
}

nextButton.addEventListener('click', () => {
  updatePosition('next')
  const snippet = getCurrentSnippet(currentBlock)
  if (snippet) {
    snippet.display(videoIFrame)
    challengeVidBtn.textContent = snippet.title
  }
})

prevButton.addEventListener('click', () => {
  updatePosition('prev')
  const snippet = getCurrentSnippet(currentBlock)
  if (snippet) {
    snippet.display(videoIFrame)
    challengeVidBtn.textContent = snippet.title
  }
})

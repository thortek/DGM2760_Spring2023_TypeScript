import curriculum from '../data/curriculum.json'

const blocks = curriculum['responsive-web-design'].blocks

const blocksArray = Object.values(blocks)
const [basicCss, basicHTML, flexbox, grid] = blocksArray

let cssPosition: number = 0
let htmlPosition: number = 0
let flexboxPosition: number = 0
let gridPosition: number = 0

let currentBlock: string

const videoIFrame = document.querySelector('#challengeVid')! as HTMLIFrameElement
const prevButton = document.querySelector('#prev')! as HTMLButtonElement
const challengeVidBtn = document.querySelector('#challengeVidBtn')!
const nextButton = document.querySelector('#next')! as HTMLButtonElement
const topMenu = document.querySelector('.menu')!

interface VideoDisplayer {
    videoUrl: string
    display(theFrame: HTMLIFrameElement): void
}

class CodeSnippet implements VideoDisplayer {
    constructor(public title: string, public description: string, public instructions: string, public videoUrl: string) {
    }
    display(theFrame: HTMLIFrameElement): void {
        theFrame.src = this.videoUrl
    }
}

const basicCssSnippets = basicCss.challenges.map((challenge: any) => new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl))

const basicHtmlSnippets = basicHTML.challenges.map((challenge: any) => new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl))

const flexboxSnippets = flexbox.challenges.map((challenge: any) => new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl))

const gridSnippets = grid.challenges.map((challenge: any) => new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl))

console.log(basicCssSnippets.length, basicHtmlSnippets.length, flexboxSnippets.length, gridSnippets.length)

const populateMenu = (arrayOfBlocks: any[]) => {
    arrayOfBlocks.forEach(block => {
        const menuItem = document.createElement('li')
        const menuLink = document.createElement('a')
        menuLink.textContent = block?.meta?.name

        menuLink.addEventListener('click', () => {
            const allMenuLinks = document.querySelectorAll('.menu li a')
            allMenuLinks.forEach(link => {
                link.classList.remove('active')
            })
            menuLink.classList.add('active')
            currentBlock = block?.meta?.name
        })

        menuItem.appendChild(menuLink)
        topMenu.appendChild(menuItem)
    })
}

populateMenu(blocksArray)

nextButton.addEventListener('click', () => {
    let snippet: CodeSnippet = new CodeSnippet('', '', '', '')
    if (currentBlock === 'Basic CSS') {
        snippet = basicCssSnippets[cssPosition]
        cssPosition <= basicCssSnippets.length ? cssPosition++ : cssPosition = 0
    }
    if (currentBlock === 'Basic HTML and HTML5') {
        snippet = basicHtmlSnippets[htmlPosition]
        htmlPosition <= basicHtmlSnippets.length ? htmlPosition++ : htmlPosition = 0
    }
    if (currentBlock === 'CSS Flexbox') {
        snippet = flexboxSnippets[flexboxPosition]
        flexboxPosition <= flexboxSnippets.length ? flexboxPosition++ : flexboxPosition = 0
    }
    if (currentBlock === 'CSS Grid') {
        snippet = gridSnippets[gridPosition]
        gridPosition <= gridSnippets.length ? gridPosition++ : gridPosition = 0
    }
    if (snippet.videoUrl && snippet.title) {
        snippet.display(videoIFrame)
        challengeVidBtn.textContent = snippet.title
    }
})

/* const buildSnippetDisplay = (challenge: any) => {
    const snippet = new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl)

    const displayCard = document.createElement('div')
    displayCard.classList.add('bg-white', 'rounded', 'shadow-md', 'p-4', 'm-4', 'w-full')

    const videoFrame = document.createElement('iframe')
    videoFrame.classList.add('w-[1024px]', 'h-[720px]', 'rounded', 'shadow-md', 'm-4')

    const title = document.createElement('h2')
    title.classList.add('text-2xl', 'font-bold', 'm-4', 'btn')
    title.textContent = snippet.title
    title.addEventListener('click', () => {
        snippet.display(videoFrame)
    })

    displayCard.appendChild(videoFrame)
    displayCard.appendChild(title)
    main.appendChild(displayCard)
}

buildSnippetDisplay(blocksArray[0].challenges[0]) */
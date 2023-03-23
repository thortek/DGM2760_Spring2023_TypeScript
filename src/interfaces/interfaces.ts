import curriculum from '../data/curriculum.json'

const blocks = curriculum['responsive-web-design'].blocks

const blocksArray = Object.values(blocks)
const [basicCss, basicHTML, flexbox, grid] = blocksArray

let cssPosition: number = 0
let htmlPosition: number = 0
let flexPosition: number = 0
let gridPosition: number = 0

let currentBlock: string

const videoIFrame:HTMLIFrameElement = document.querySelector('#challengeVid')!
const prevButton = document.querySelector('#prev')!
const challengeVidBtn = document.querySelector('#challengeVidBtn')!
const nextButton = document.querySelector('#next')!
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

const basicHTMLSnippets = basicHTML.challenges.map((challenge: any) => new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl))

const flexboxSnippets = flexbox.challenges.map((challenge: any) => new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl))

const gridSnippets = grid.challenges.map((challenge: any) => new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl))

const populateMenu = (blocksArray: any[]) => {
    blocksArray.forEach((block: any) => {
        const menuItem = document.createElement('li')
        const menuLink = document.createElement('a')
        menuLink.textContent = block?.meta?.name
        menuLink.addEventListener('click', () => {
            console.log('You clicked on ' + block?.meta?.name)
            const allMenuLinks = document.querySelectorAll('.menu li a')
            console.log(allMenuLinks)
            allMenuLinks.forEach((item: any) => {
                item.classList.remove('active')
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
    let snippet: CodeSnippet = new CodeSnippet('','','','')
    if (currentBlock === 'Basic CSS') {
        snippet = basicCssSnippets[cssPosition]
        challengeVidBtn.textContent = snippet.title
        cssPosition <= basicCssSnippets.length ? cssPosition++ : cssPosition = 0
    }
    if (currentBlock === 'Basic HTML and HTML5') {
        snippet = basicHTMLSnippets[htmlPosition]
        challengeVidBtn.textContent = snippet.title
        htmlPosition <= basicHTMLSnippets.length ? htmlPosition++ : htmlPosition = 0
    }
    if (currentBlock === 'CSS Flexbox') {
        snippet = flexboxSnippets[flexPosition]
        challengeVidBtn.textContent = snippet.title
        flexPosition <= flexboxSnippets.length ? flexPosition++ : flexPosition = 0
    } 
    if (currentBlock === 'CSS Grid') {
        snippet = gridSnippets[gridPosition]
        challengeVidBtn.textContent = snippet.title
        gridPosition <= gridSnippets.length ? gridPosition++ : gridPosition = 0
    }
    if (snippet.videoUrl) {
        snippet.display(videoIFrame)
    }
})

prevButton.addEventListener('click', () => {
    if (currentBlock === 'Basic CSS') {
        let snippet = basicCssSnippets[cssPosition]
        challengeVidBtn.textContent = snippet.title
        cssPosition > 1 ? cssPosition-- : cssPosition = 0
    }
    if (currentBlock === 'Basic HTML and HTML5') {
        let snippet = basicHTMLSnippets[htmlPosition]
        challengeVidBtn.textContent = snippet.title
        htmlPosition > 1 ? htmlPosition-- : htmlPosition = 0
    }
    if (currentBlock === 'CSS Flexbox') {
        let snippet = flexboxSnippets[flexPosition]
        challengeVidBtn.textContent = snippet.title
        flexPosition > 1 ? flexPosition-- : flexPosition = 0
    } 
    if (currentBlock === 'CSS Grid') {
        let snippet = gridSnippets[gridPosition]
        challengeVidBtn.textContent = snippet.title
        gridPosition > 1 ? gridPosition-- : gridPosition = 0    }
})

challengeVidBtn.addEventListener('click', () => {
    console.log('You clicked on ' + challengeVidBtn.textContent)
})
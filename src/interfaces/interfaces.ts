import curriculum from '../data/curriculum.json'

const blocks = curriculum['responsive-web-design'].blocks

const blocksArray = Object.values(blocks)

const main = document.querySelector('main')!

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

const buildSnippetDisplay = (challenge: any) => {
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

buildSnippetDisplay(blocksArray[0].challenges[0])
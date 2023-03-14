import exampleData from '../data/curriculum.json'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
const blocks = exampleData['responsive-web-design'].blocks

//console.log(blocks)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const blocksArray = Object.entries(blocks)

//console.log(blocksArray)



//const navbar = document.querySelector('.navbar')!
const navBar = document.querySelector('.navbar')!
const navList = document.querySelector('#navList')!

const buildNavFromJSON = (block: any) => {
    const navItem = document.createElement('a')
    navItem.classList.add('btn', 'btn-ghost', 'normal-case', 'text-xl', 'mx-4')
    navItem.textContent = block.meta.name
    navItem.addEventListener('click', () => {
        const foundBlock = blocksArray.find((item: any) => item[1].meta.name === block.meta.name)
        if (foundBlock![1]) {
            buildUIFromJSON(foundBlock![1])
        }
    })
    navBar.appendChild(navItem)
}

export const buildUIFromJSON = (block: any) => {
    while (navList.firstChild) {
        navList.removeChild(navList.firstChild)
    }
    block.challenges.forEach((item: any) => {
        //console.log(item)
        const listItem = document.createElement('li')
        listItem.classList.add('my-4')
        const navButton = document.createElement('h3')
        navButton.classList.add('w-72', 'bg-slate-600', 'rounded', 'p-2', 'text-white', 'text-center', 'text-xl', 'font-bold', 'shadow-md', 'hover:bg-slate-800', 'hover:shadow-lg', 'transition-all', 'duration-300', 'ease-in-out', 'cursor-pointer')
        navButton.textContent = item.title
        listItem.addEventListener('click', () => {
            const foundChallenge = block.challenges.find((challenge: any) => challenge.id === item.id)
            if (foundChallenge) {
                console.log(foundChallenge)
                buildSnippetDisplay(foundChallenge)
            }

        })
        listItem.appendChild(navButton)
        navList.appendChild(listItem)
    })
}

class ExampleCodeSnippet {
    constructor(public title: string, public description: string, public instructions: string) {
    }
}

const buildSnippetDisplay = (challenge: any) => {
    const snippet = new ExampleCodeSnippet(challenge.title, challenge.description, challenge.instructions)
    const snippetDisplay = document.querySelector('#snippetDisplay')!
    while (snippetDisplay.firstChild) {
        snippetDisplay.removeChild(snippetDisplay.firstChild)
    }
    const snippetTitle = document.createElement('h2')
    snippetTitle.classList.add('text-3xl', 'font-bold', 'text-center')
    snippetTitle.textContent = snippet.title
    snippetDisplay.appendChild(snippetTitle)
    const snippetExplanation = document.createElement('div')
    snippetExplanation.classList.add('text-3xl', 'text-center', 'max-w-2xl', 'mx-auto', 'my-16')
    snippetExplanation.innerHTML = snippet.description
    snippetDisplay.appendChild(snippetExplanation)
    const snippetCode = document.createElement('div')
    snippetCode.classList.add('text-2xl', 'text-center', 'mb-4', 'bg-red-600','max-w-2xl', 'mx-auto')
    snippetCode.innerHTML = snippet.instructions
    snippetDisplay.appendChild(snippetCode)
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
blocksArray.map((block: any) => {
    // 'unpack' the array into two distinct variables
    const [, blockData, ...rest] = block // ignore the first element of the array
    //buildNavFromJSON(blockData)
    //buildUIFromJSON(blockData)
    //console.log(blockData.meta.name, blockData.challenges)

    // 'unpack' the properties of the object into two distinct variables
    const { meta, challenges, ...others } = blockData
    console.log(meta.name, challenges, others, rest)   
    
    const [firstChallenge, secondChallenge, ...restOfChallenges] = challenges
    console.log(firstChallenge, secondChallenge, restOfChallenges)

    const { id, title, description, instructions, ...restOfChallenge } = firstChallenge
    console.log(id, title, description, instructions, restOfChallenge)
})



/* class ExampleCodeSnippet {
    private title: string
    private explanation: string
    private code: string

    constructor(title: string, explanation: string, code: string) {
        this.title = title
        this.explanation = explanation
        this.code = code
    }

    getTitle() {
        return this.title
    }

    getExplanation() {
        return this.explanation
    }

    getCode() {
        return this.code
    }
} */


/* 
let codeSnippet1 = new ExampleCodeSnippet(`How to define a class`, `Here is where I explain how to define a class`, `<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>`)

console.log(codeSnippet1.getTitle())
console.log(codeSnippet1.getExplanation(), codeSnippet1.getCode())

console.log(Math.random())

let simplerCodeSnippet = new ExampleCodeSnippetShortcut(`How to define a simpler, shortcut class`, `Here is where I explain how to define a more simple, shortcut class using the constructor`, `<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>`)

console.log(simplerCodeSnippet.getTitle()) */
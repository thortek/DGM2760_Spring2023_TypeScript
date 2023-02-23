import exampleData from '../data/curriculum.json'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
const blocks = exampleData['responsive-web-design'].blocks

console.log(blocks)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const blocksArray = Object.entries(blocks)

console.log(blocksArray)



//const navbar = document.querySelector('.navbar')!
const navbarCenter = document.querySelector('.navbar-center')!
const navList = document.querySelector('#navList')!

const buildNavFromJSON = (blockName: any) => {
    const navItem = document.createElement('a')
    navItem.classList.add('btn', 'btn-ghost', 'normal-case', 'text-xl')
    navItem.textContent = blockName
    navbarCenter.appendChild(navItem)
}

export const buildUIFromJSON = (importedObject: any) => {
    importedObject.challenges.forEach((item: any) => {
        console.log(item)
        const listItem = document.createElement('li')
        listItem.classList.add('my-4')
        const navButton = document.createElement('h3')
        navButton.classList.add('w-72', 'bg-slate-600', 'rounded', 'p-2', 'text-white', 'text-center', 'text-xl', 'font-bold', 'shadow-md', 'hover:bg-slate-800', 'hover:shadow-lg', 'transition-all', 'duration-300', 'ease-in-out', 'cursor-pointer')
        navButton.textContent = item.title
        listItem.appendChild(navButton)
        navList.appendChild(listItem)
    })
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
blocksArray.map((block: any) => {
    const [, blockData] = block // ignore the first element of the array
    buildNavFromJSON(blockData.meta.name)
    buildUIFromJSON(blockData)
    console.log(blockData.meta.name, blockData.challenges)
})



class ExampleCodeSnippet {
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
}

class ExampleCodeSnippetShortcut {
    constructor(private title: string, private explanation: string, private code: string) {
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
}

let codeSnippet1 = new ExampleCodeSnippet(`How to define a class`, `Here is where I explain how to define a class`, `<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>`)

console.log(codeSnippet1.getTitle())
console.log(codeSnippet1.getExplanation(), codeSnippet1.getCode())

console.log(Math.random())

let simplerCodeSnippet = new ExampleCodeSnippetShortcut(`How to define a simpler, shortcut class`, `Here is where I explain how to define a more simple, shortcut class using the constructor`, `<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>`)

console.log(simplerCodeSnippet.getTitle())
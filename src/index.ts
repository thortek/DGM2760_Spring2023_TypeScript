import { functionParamsExample, objectTypeExample } from "./basicTypes"
// import example data from exampleData.json
//import exampleData from './exampleData.json'

const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesButton = document.querySelector('#objectTypes')!

//const codeExample = document.querySelector('#code-example')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#card-content')!
const codeContent = document.querySelector('#code-content')!

//funcParamsButton.addEventListener('click', loadExample.bind(this, functionParamsExample))
//objectTypesButton.addEventListener('click', loadExample.bind(this, objectTypeExample))

// function showFuncParamsExample() {
//     const { title, explanation, code } = functionParamsExample()
//     cardTitle.textContent = title
//     cardContent.textContent = explanation
//     codeContent.innerHTML = code
// }

// function showObjTypesExample() {
//     const { title, explanation, code } = objectTypeExample()
//     cardTitle.textContent = title
//     cardContent.textContent = explanation
//     codeContent.innerHTML = code
// }

/* function loadExample(functionExample: () => { title: string, explanation: string, code: string }) {
    const { title, explanation, code } = functionExample()
    cardTitle.textContent = title
    cardContent.textContent = explanation
    codeContent.innerHTML = code
} */

/* Now try constructing the UI elements from the JSON */

const navList = document.querySelector('#navList')!

const buildUIFromJSON = (importedObject: any) => {
    importedObject.data.forEach((item: any) => {
        console.log(item)
        const listItem = document.createElement('li')
        listItem.classList.add('my-4')
        const navButton = document.createElement('button')
        navButton.classList.add('btn', 'btn-primary')
        navButton.textContent = item.buttonTitle
        listItem.appendChild(navButton)
        navList.appendChild(listItem)
    })
}

buildUIFromJSON(exampleData)

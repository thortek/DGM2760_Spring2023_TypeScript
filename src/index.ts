import { functionParamsExample, objectTypeExample } from "./basicTypes"

const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesButton = document.querySelector('#objectTypes')!

//const codeExample = document.querySelector('#code-example')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#card-content')!
const codeContent = document.querySelector('#code-content')!

funcParamsButton.addEventListener('click', loadExample.bind(this, functionParamsExample))
objectTypesButton.addEventListener('click', loadExample.bind(this, objectTypeExample))

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

function loadExample(functionExample: () => { title: string, explanation: string, code: string }) {
    const { title, explanation, code } = functionExample()
    cardTitle.textContent = title
    cardContent.textContent = explanation
    codeContent.innerHTML = code
}
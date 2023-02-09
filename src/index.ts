import { functionParamsExample, objectTypeExample } from "./basicTypes"

const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesButton = document.querySelector('#objectTypes')!

//const codeExample = document.querySelector('#code-example')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#card-content')!
const codeContent = document.querySelector('#code-content')!

funcParamsButton.addEventListener('click', showFuncParamsExample)
objectTypesButton.addEventListener('click', showObjTypesExample)

function showFuncParamsExample() {
    cardTitle.textContent = functionParamsExample().title // chaining example
    const { explanation, code } = functionParamsExample()
    cardContent.textContent = explanation
    codeContent.innerHTML = code
}

function showObjTypesExample() {
    cardTitle.textContent = objectTypeExample().title // chaining example
    const { explanation, code } = objectTypeExample()
    cardContent.textContent = explanation
    codeContent.innerHTML = code
}
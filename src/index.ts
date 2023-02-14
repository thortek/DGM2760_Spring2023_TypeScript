import { functionParamsExample, objectTypeExample } from "./basicTypes" // import from function library


//get a handle to all of our UI elements
const funcParamsButton = document.querySelector('#funcParams')!
const objTypesButton = document.querySelector('#objTypes')!
const cardTitle = document.querySelector('.card-title')!
const cardContent= document.querySelector('#card-content')!
const codeContent = document.querySelector('#codeContent')!

funcParamsButton.addEventListener('click', showFuncParamsExample)
objTypesButton.addEventListener('click', showObjTypesExample)

function showFuncParamsExample() {
  console.log('About to show example...')
  const { explanation, code } = functionParamsExample() //destructure object
  cardTitle.textContent = functionParamsExample().title // chaining
  cardContent.textContent = explanation
  codeContent.innerHTML = code
}

function showObjTypesExample() {
  const {title, explanation, code } = objectTypeExample() //destructure object
  cardTitle.textContent = title // chaining
  cardContent.textContent = explanation
  codeContent.innerHTML = code
}
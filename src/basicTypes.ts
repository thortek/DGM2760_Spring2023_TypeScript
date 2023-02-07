const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesToggle = document.querySelector('#objectTypes')!
const codeExample = document.querySelector('#codeExample')!
const cardTitle = document.querySelector('.card-title')!
const cardContent1 = document.querySelector('#cardContent1')!
const cardContent2 = document.querySelector('#cardContent2')!

funcParamsButton.addEventListener('click', showExample1)
objectTypesToggle.addEventListener('click', showExample2)

function showExample1() {
    console.log('About to show example...')
    cardTitle.textContent = 'Typed function parameters'
    cardContent1.innerHTML = `<pre data-prefix="1">function add(num1: number, num2: number) {
    <pre data-prefix="2">    return num1 + num2</pre>
<pre data-prefix="3">}</pre>`
    
}

function showExample2() {

}

console.log('This is my Basic Types practice page')

// A parameter is a named variable passed into a function
function add(num1: number, num2: number) {
    return num1 + num2
}

const numberOne = 25
const numberTwo = 3.5

// an argument is a value (primitve or object) passed as input to a function.
let result = add(numberOne, numberTwo)
console.log(result)

enum Role {ADMIN, DEV, STUDENT}

const sportsCar: {
    make: string;
    model: string;
    horsepower: number;
    style: string;
    isFast: boolean;
    colors: string[];
    driver: [number, string];
    role: Role;
} = {
    make: "McLaren",
    model: '720s',
    horsepower: 720,
    style: 'coupe',
    isFast: true,
    colors: ['red', 'blue', 'silver'],
    driver: [1, 'McLaren'],
    role: Role.ADMIN
}

console.log('My car is one of these', sportsCar)
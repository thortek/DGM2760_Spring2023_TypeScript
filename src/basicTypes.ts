const funcParamsButton = document.querySelector('#funcParams')!
const codeExample = document.querySelector('#codeExample')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#cardContent')!

funcParamsButton.addEventListener('click', showExample)

function showExample() {
    console.log('About to show example...')
  cardTitle.textContent = 'function add(num1: number, num2: number)'
  cardContent.innerHTML = `<p>some code goes here</p>`
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
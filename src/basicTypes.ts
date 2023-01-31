const funcParamsButton = document.querySelector('#funcParams')
const cardTitle = document.querySelector('.card-title')

funcParamsButton?.addEventListener('click', showExample)

function showExample() {
    console.log('About to show example...')
    //cardTitle.textContent = 'function add(num1: number, num2: number)'
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

const storageHTML = `<body>
<header class="m-8 text-4xl">Basic TypeScript Types Examples</header>
<main class="flex h-screen">
  <nav class="w-72 h-full">
    <ul>
      <li class="m-8">
        <button id="funcParams" class="btn btn-primary">Function Parameter Types</button>
      </li>
    </ul>
  </nav>
  <div>
    <div id="codeExample" class="card">
        <div class="card-body">
            <h2 class="card-title"></h2>
        </div>
    </div>
  </div>
</main>
<footer>&copy; Thor Anderson 2023 - For Educational Purposes Only</footer>
</body>`
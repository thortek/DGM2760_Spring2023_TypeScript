
export const functionParamsExample = () => {
  return {
    title: `Data types set on function parameters`,
    explanation: `Here is where I explain the syntax of function parameters when using TypeScript`,
    code: `
    <pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
    <pre data-prefix="2"><code>    return num1 + num2</code></pre>
    <pre data-prefix="3"><code>}</code></pre>
    `
  }
}

enum Role {
  ADMIN,
  DEV,
  STUDENT,
}

const sportsCar: {
  make: string
  model: string
  horsepower: number
  style: string
  isFast: boolean
  colors: string[]
  driver: [number, string]
  role: Role
} = {
  make: 'McLaren',
  model: '720s',
  horsepower: 720,
  style: 'coupe',
  isFast: true,
  colors: ['red', 'blue', 'silver'],
  driver: [1, 'McLaren'],
  role: Role.ADMIN,
}

export const objectTypeExample = () => {
  return {
    title: `Object data type with all properties set`,
    explanation: `TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.`,
    code: `
    <pre data-prefix="1"><code>enum Role {</code></pre>
    <pre data-prefix="2"><code>  ADMIN,</code></pre>
    <pre data-prefix="3"><code>  DEV,</code></pre>
    <pre data-prefix="4"><code>  STUDENT,</code></pre>
    <pre data-prefix="5"><code>}</code></pre>
    <pre data-prefix="6"><code></code></pre>
    <pre data-prefix="7"><code>const sportsCar: {</code></pre>
    <pre data-prefix="8"><code>  make: string</code></pre>
    <pre data-prefix="9"><code>  model: string</code></pre>
    <pre data-prefix="10"><code>  horsepower: number</code></pre>
    <pre data-prefix="11"><code>  style: string</code></pre>
    <pre data-prefix="12"><code>  isFast: boolean</code></pre>
    <pre data-prefix="13"><code>  colors: string[]</code></pre>
    <pre data-prefix="14"><code>  driver: [number, string]</code></pre>
    <pre data-prefix="15"><code>  role: Role</code></pre>
    <pre data-prefix="16"><code>} = {</code></pre>
    <pre data-prefix="17"><code>  make: 'McLaren',</code></pre>
    <pre data-prefix="18"><code>  model: '720s',</code></pre>
    <pre data-prefix="19"><code>  horsepower: 720,</code></pre>
    <pre data-prefix="20"><code>  style: 'coupe',</code></pre>
    <pre data-prefix="21"><code>  isFast: true,</code></pre>
    <pre data-prefix="22"><code>  colors: ['red', 'blue', 'silver'],</code></pre>
    <pre data-prefix="23"><code>  driver: [1, 'McLaren'],</code></pre>
    <pre data-prefix="24"><code>  role: Role.ADMIN,</code></pre>
    <pre data-prefix="25"><code>}</code></pre>
  `
  } 
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

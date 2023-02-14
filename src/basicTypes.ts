export const functionParamsExample = () => {
    return {
        title: `Data types can be set on function parameters`,
        explanation: `This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')`,
        code: `<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
            <pre data-prefix="2"><code>    return num1 + num2</code></pre>
        <pre data-prefix="3"><code>}</code></pre>`
    }
}

export const objectTypeExample = () => {
    return {
        title: `Object data type with all properties set`,
        explanation: `TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.`,
        code: `<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
        <pre data-prefix="2"><code></code></pre>
        <pre data-prefix="3"><code>const sportsCar: {</code></pre>
        <pre data-prefix="4"><code>  make: string</code></pre>
        <pre data-prefix="5"><code>  model: string</code></pre>
        <pre data-prefix="6"><code>  horsepower: number</code></pre>
        <pre data-prefix="7"><code>  style: string</code></pre>
        <pre data-prefix="8"><code>  isFast: boolean</code></pre>
        <pre data-prefix="9"><code>  colors: string[]</code></pre>
        <pre data-prefix="10"><code>  driver: [number, string]</code></pre>
        <pre data-prefix="11"><code>  role: Role</code></pre>
        <pre data-prefix="12"><code>} = {</code></pre>
        <pre data-prefix="13"><code>  make: 'McLaren',</code></pre>
        <pre data-prefix="14"><code>  model: '720s',</code></pre>
        <pre data-prefix="15"><code>  horsepower: 720,</code></pre>
        <pre data-prefix="16"><code>  style: 'coupe',</code></pre>
        <pre data-prefix="17"><code>  isFast: true,</code></pre>
        <pre data-prefix="18"><code>  colors: ['red', 'blue', 'silver'],</code></pre>
        <pre data-prefix="19"><code>  driver: [1, 'McLaren'],</code></pre>
        <pre data-prefix="20"><code>  role: Role.ADMIN,</code></pre>
        <pre data-prefix="21"><code>}</code></pre>`
    }
}

console.log('This is my Basic Types practice page')

// A parameter is a named variable passed into a function
function add(num1: number, num2: number): number {
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
    role: Role.ADMIN,
}

console.log('My car is one of these', sportsCar)

// Example of typescript union types    

function combine(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine(25, 3.5))
console.log(combine('25', '3.5'))

// Example of typescript literal types

function combine2(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine2(25, 3.5, 'as-number'))
console.log(combine2('25', '3.5', 'as-number'))
console.log(combine2('25', '3.5', 'as-text'))

// Example of typescript function as type
//function loadExample(functionExample: () => { title: string, explanation: string, code: string })
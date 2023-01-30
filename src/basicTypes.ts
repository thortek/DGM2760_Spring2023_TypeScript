

// A parameter is a named variable passed into a function
export function add(num1: number, num2: number) {
    return num1 + num2
}

export function doSomething() {
  const numberOne = 25
  const numberTwo = 3.5

  // an argument is a value (primitve or object) passed as input to a function.
  let result = add(numberOne, numberTwo)

  const sportsCar = {
    make: 'McLaren',
    model: '720s',
    horsepower: 720,
    style: 'coupe',
    isFast: true,
  }

  console.log(result, sportsCar)

}
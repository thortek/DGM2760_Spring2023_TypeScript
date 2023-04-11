function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
console.log(mergedObj)

// This reverse function takes an array of any type (as indicated by <T>) and returns an array of the same type

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

const stringArray = ['key lime', 'cherry', 'lemon']
const reversedStringArray = reverse<string>(stringArray)
console.log(reversedStringArray)

const numberArray = [1342, 2654, 345676]
const reversedNumberArray = reverse<number>(numberArray)
console.log(reversedNumberArray)

// This class takes a generic type T. We can create a new instance of this class and pass in a number or a string. The type of the value property will be set to whatever type we pass in.

class DataStorage<T> {
    data: T

    constructor(data: T) {
        this.data = data
    }

    getData(): T {
        return this.data
    }
}

const textStorage = new DataStorage<string>('Hello World')
console.log(textStorage.getData())

const numberStorage = new DataStorage<number>(2034809230948)
console.log(numberStorage.getData())
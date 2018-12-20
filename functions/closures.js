// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
// console.log(counter.get())

// Adder
const add = (a,b) => a + b

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)

console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

console.log(add(2,4))
console.log('-----------------')

const createTipper = (tip) => {
    return (bill) => {
        return (tip * bill)
    }
}

const tip20 = createTipper(0.20)
const tip15 = createTipper(0.15)

console.log(tip20(20))
console.log(tip15(20))
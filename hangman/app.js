// Primitive values: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: muNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const product = 'Computer'
// console.log(product)
// // console.log(product.split(''))

// const otherProduct = new String('Phone')
// console.log(otherProduct)

const game1 = new Hangman('Cat', 2)

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')
puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses
console.log(game1.status)
statusEl.textContent =  game1.getStatus()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.addGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
    console.log(game1.status)
    statusEl.textContent = game1.statusEl
    statusEl.textContent =  game1.getStatus()
})

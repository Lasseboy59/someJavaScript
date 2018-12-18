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
puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses
// puzzleEl.appendChild(puzzle)
// guessesEl.appendChild(guesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.addGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
    let puzzle = game1.getPuzzle()
    puzzleEl.textContent = puzzle
    let guesses = game1.remainingGuesses
    guessesEl.textContent = game1.remainingGuesses

    showOnPage(puzzle, guesses)
})


// Generate the DOM structure for a note
const showOnPage = function(puzzle, guesses) {
    document.querySelector('#notes').innerHTML = ''
    const element = document.getElementById('notes')
    var linebreak = document.createElement('br');

    var textNode = document.createTextNode('The word: ' + puzzle);
    element.appendChild(textNode);
    element.appendChild(linebreak);
    textNode = document.createTextNode('Number of guesses ' + guesses);
    element.appendChild(textNode);
}

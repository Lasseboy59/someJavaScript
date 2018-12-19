// Primitive values: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: muNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const game1 = new Hangman('Cat', 2)

const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')

puzzleEl.textContent = game1.puzzle
statusEl.textContent =  game1.GameStatus

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.addGuess(guess)
    puzzleEl.textContent = game1.puzzle
    statusEl.textContent =  game1.GameStatus
})

getPuzzle("2",(error, puzzle) => {
    if(error) {
        console.log(`Error: ${error}`)
    } else{
        console.log(puzzle)
    }
})

getCountryDetails("FI",(error, country) => {
    if(error) {
        console.log(`Error: ${error}`)
    } else{
        console.log(`Country name: ${country.name} population: ${country.population}`)
    }
})

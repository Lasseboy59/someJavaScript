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

getPuzzle((error, puzzle) => {
    if(error) {
        console.log(`Error: ${error}`)
    } else{
        console.log(puzzle)
    }
})


// Makng an HTTP request


// const countryRequest = new XMLHttpRequest()
// const countryCode = 'FI'

// countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         let countries = e.target.responseText
//         let code = 'alpha2code'
 
//         const country = data.find((country) => {
//             if (country.alpha2Code === countryCode) {
//                 return true
//             } else {
//                 return false
//             }
//         })

//         console.log(`Country code [${countryCode}] found: ${country.name}`)

        
//     } else if(e.target.readyState === 4) {
//         console.log('And error has taken place')
//     }
// })

// countryRequest.open('GET','http://restcountries.eu/rest/v2/all')
// countryRequest.send()


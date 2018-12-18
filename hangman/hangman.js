// Create a method for making a guess
const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}


Hangman.prototype.addGuess = function(guess) {
    this.guess = guess.toLowerCase()
    const isUnigue = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    
    if(!this.guessedLetters.includes(guess)){
        this.guessedLetters.push(guess)
    }

    if(isUnigue && isBadGuess){
        this.remainingGuesses--
    }
}


const game1 = new Hangman('Cat', 2)
// game1.guessedLetters = 'c*t'

// console.log(game1.getPuzzle())
// let puzzle = game1.getPuzzle()
// console.log(game1.remainingGuesses)
// let puzzle2 = game1.remainingGuesses

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.addGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
    let puzzle = game1.getPuzzle()
    let puzzle2 = game1.remainingGuesses
    showOnPage(puzzle, puzzle2)
})


// Generate the DOM structure for a note
    const showOnPage = function(puzzle, puzzle2) {
        document.querySelector('#notes').innerHTML = ''
        const element = document.getElementById('notes')
        var linebreak = document.createElement('br');

        var textNode = document.createTextNode('The word: ' + puzzle);
        element.appendChild(textNode);
        element.appendChild(linebreak);
        textNode = document.createTextNode('Number of guesses ' + puzzle2);
        element.appendChild(textNode);
    }
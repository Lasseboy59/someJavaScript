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

    return this.remainingGuesses

}


const game1 = new Hangman('Cat', 2)

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.addGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})



// const game2 = new Hangman('New Jersey', 4)
// console.log(game2.getPuzzle()) // **w ******
// game2.addGuess('w')
// console.log('Remaining guesses: ' + game2.remainingGuesses)


const game2 = new Hangman('New Jersey', 4)
game2.addGuess('w')
console.log(game2.getPuzzle()) // **w ******

console.log('Remaining guesses: ' + game2.remainingGuesses)
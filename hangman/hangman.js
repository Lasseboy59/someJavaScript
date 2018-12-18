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

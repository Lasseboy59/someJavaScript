// Create a method for making a guess
const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getStatus = function(){

    let finished = true

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter)) {

        } else {
            finished = false
        }
    })

    if(this.remainingGuesses === 0){
        this.status = 'failed'
    } else if(finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
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

    this.getStatus()
}


const Hangman = function(puzzleWord, remainingGuesses){
    this.puzzleWord = puzzleWord
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('Lasse', 4)
const game2 = new Hangman('Tim', 3)

let name = 'Tim'
console.log(name.toLowerCase())

console.log(game1)
console.log(game2)
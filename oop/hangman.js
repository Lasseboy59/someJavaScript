var readline = require('readline')

const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase()
    this.remainingGuesses = remainingGuesses
    this.wordLen = word.length
}

Hangman.prototype.getPuzzle = function(){
    let array = [this.word];
    // console.log(array[0][1])
    return array
}


const game = new Hangman('Cat', 3)
const guess = new Hangman('cbt')

let baseWord = []

let yourGuesses = function() {
    if (game.word === guess.word){
        console.log('arvasit oikein')
        baseWord = game.word
    } else if (game.word !== guess.word){
        let i = 0
        while (i < game.wordLen) {
            if(game.word[i] === guess.word[i]) {
                baseWord.push(guess.word[i])
            } else {
                baseWord.push('*')
            }

            i++;
            }

    } else {
        let i = 0
        while (i < game.wordLen) {
            baseWord.push('*')
            i++;
            }
    }    
}

yourGuesses(guess)

// let howManyGuesses = function() {
    process.stdout.write(`No guesses? -> ` );
    let i = 0
    while (i <= game.wordLen - 1) {
        process.stdout.write(`*` );
        i++;
        }
     
     console.log()
// }

// howManyGuesses()


i = 0
process.stdout.write(`Guessed `)
while (i < game.wordLen-1) {
    process.stdout.write(`"${guess.word[i]}",` );
    i++;
}
process.stdout.write(` and "${guess.word[i]}"?`)


process.stdout.write(` -> `)
i = 0
while (i < game.wordLen-1) {
    process.stdout.write(`${baseWord[i]}` );
    i++;
}
process.stdout.write(`${baseWord[i]}`)
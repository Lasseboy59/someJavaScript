

const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase()
    this.remainingGuesses = remainingGuesses
    this.wordLen = word.length
}

Hangman.prototype.getPuzzle = function(){
    let array = [this.word];
    // console.log(array[0][1])
    // console.log('-> ' + array[0].length)

    return array
}


const game = new Hangman('Cat', 3)

const guess = new Hangman('Catt')
let baseWord = []

if (game.word === guess.word){
    console.log('arvasit oikein')
} else {
    let i = 0

    while (i < game.wordLen) {
        baseWord.push('*')
        i++;
      }


}
console.log('-> ' + game.getPuzzle())
console.log(baseWord)

let i = 0
while (i < game.wordLen) {
    console.log(baseWord[i])
    process.stdout.write(baseWord[i]);
    i++;
  }


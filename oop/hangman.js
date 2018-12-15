

const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase()
    this.remainingGuesses = remainingGuesses
    this.wordLen = word.length
}

Hangman.prototype.getPuzzle = function(){
    var array = [this.word];
    console.log('-- ' + array[0][1])
    console.log('-> ' + array[0].length)

    return array
}


const game = new Hangman('Cat', 3)

const guess = new Hangman('Timo')

console.log(game.getPuzzle())
console.log(guess.word + ' ' + guess.wordLen)



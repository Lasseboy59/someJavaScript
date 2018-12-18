word = ['cat']
guessedLetters = ['hatc']

let status = 'playing'

// word.forEach(function(element) {
//     console.log(element)
//     if(this.guessedLetters.contains(element))
// });

console.log(word.length)
console.log(word)

word.forEach(function(element) {
    console.log(element)
});


const arrayIncludes = function() {

    if(status === 'playing'){
        let state = ''
        for(let i = 0, count = 0; i < word.length; i++){
            console.log(word[0][i])
            console.log()
            if(guessedLetters.includes(word[0][i])){
                count++
                state = 'playing'
            }
            if(count === word.length){
                state = 'finished'
            }
        }

        return state
    }

    return 'playing'
}

console.log(arrayIncludes())

var array1 = ['abc'];

array1.forEach(function(element) {
  console.log(element.get);
});
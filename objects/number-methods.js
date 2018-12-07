let num = 103.901;

console.log(num.toFixed(1));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 10 - 20
console.log(randomNum);

// Challenge area
// range 1 - 5 - true or false

function makeGuess(guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return (guess === randomNum)
}

console.log(makeGuess(1));




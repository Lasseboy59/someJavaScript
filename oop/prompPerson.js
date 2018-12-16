var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
let answer = ''
rl.question('What is your name? ', function(answer){
    console.log(answer)
});

let sana = answer

console.log('sana: ' + sana)
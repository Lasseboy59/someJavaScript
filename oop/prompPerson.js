var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
let ask = ''
ask = rl.question('What is your name? ', function(answer){
    console.log(answer)
    rl.close()
});


console.log(ask)
// Multiple arguments
let add = function(a, b, c) {
    return (a + b + c);
}

let result = add(10, 15, 5)
console.log(result);

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area 
// total, tipPercent .2

let tipPercent = function(total, tip = 0.1) {
    let tip2 = total * tip;
    let tip10 = tip * 100;
    return `A ${tip10}% on $ ${total} would be $ ${tip2}`
}

let tip = tipPercent(20, .2);
console.log(tip);

let name = 'Vikram';
let age = 12;
console.log(` I am ${age} years old. Hey, my name is ${name}.`);

// Function - input (argument), code, output

let greetUser = function () {
    console.log('Hello user!')
}

greetUser();


let square = function(num) {
    let result = Math.pow(num, 2);
    return result;
}


let value = square(3)
console.log(' -> ' + value);

// Challenge area

// Convert FahrenheitToCelsius


let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

let ret1 = convertFahrenheitToCelsius(32);
let ret2 = convertFahrenheitToCelsius(68);

console.log(ret1);
console.log(ret2);
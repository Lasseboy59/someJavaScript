// Global scope (convertFahrenheitToCelsius, ret1, ret2)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;

if(celsius <= 0) {
    let isFreezing = true;
}

    return celsius;
}

let ret1 = convertFahrenheitToCelsius(32);
let ret2 = convertFahrenheitToCelsius(68);

console.log(ret1);
console.log(ret2);
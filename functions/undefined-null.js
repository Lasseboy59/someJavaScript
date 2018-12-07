// Undefined for variable
let name
name = 'Jen'

if(name === undefined) {
    console.log('Please provide a name');
} else {
    console.log(name);
}

// Undefined for function arguments
// Undefind as function return default value
let square = function(num) {
    console.log(num)
}

let res = square();

console.log(res);

// Null as a assigned value
let age = 27;

age = null;

console.log(age);
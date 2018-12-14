const square_1 = function(num){
    return num * num
}

const squareLong = (num) => {
    return num * num
}

const square = (num) => num * num

console.log(square_1(2))
console.log(square(3))
console.log(squareLong(5))

const people = [{
    name: 'Lasse',
    age:45
},{
    name: 'Ann',
    age: 21
},{
    name: 'Tim',
    age:29
}]

const under30 = people.filter(function(person) {
    return person.age < 30
})
console.log(under30)
console.log('****************')

const under25 = people.filter((person) => person.age < 25)
console.log(under25)
console.log('****************')
const ageIs29 = people.filter((person) => person.age === 29)
console.log(ageIs29)
const person = function(){
    name: ''
    age: ''
    location: ''

}

const me = new person()
me.name = 'Lasse'
me.age = 45

const tim = new person()
tim.name = 'Tim Helman'
console.log(me.name + ' ' + me.age)
console.log(tim.name + ' ' + tim.age)

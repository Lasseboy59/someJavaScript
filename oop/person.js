// Prototype Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, points, likes) {
        super(firstName, lastName, age, likes)
        this.points = points
    }
    getBio() {
        // if(this.points >= 70) {
        //     return `${this.firstName} is passing the exam`
        // }
        // return `${this.firstName} is failing the exam` 

        const status = this.points >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the exam`
    }
    updateGradePoints(pointsToAdd) {
        this.points += pointsToAdd
    }
}

const me = new Employee('Lasse', 'Ojala', 45, 'Teacher', ['Teaching', 'Biking'])
me.fullName = 'Clancy Turner'
console.log(me.getBio())
// console.log('-------------------')
// me.updateGradePoints(-10)
// console.log(me.getBio())

// const me = new Employee('Lasse', 'Ojala', 45, 'Teacher', ['Teaching', 'Biking'])
// me.setName('Aleksis Turner')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const two = new Person('Tim', 'Turner', 39)
// console.log(two.getBio())



// const myPerson = new PersonClass('Lasse', 'Ojala', 45, ['Reading'])
// console.log(myPerson.getBio())

// const Person = function(firstName, lastName, age, likes = []){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function(){
//     let bio = `${this.firstName} is ${this.age}.`

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`
//     })

//     return bio
// }

// Person.prototype.setName = function(fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }




// const calculateAverage = (thing, ...numbers) => {
//     let sum = 0
//     numbers.forEach((num) => {
//         sum += num
//     })
//     const average = (sum / numbers.length)
//     return `The average ${thing} is ${average}`
// }

// let average = calculateAverage('grade', 50, 50, 50, 100)
// // console.log(average)

// const printTeam = (team, coach, ...members) => {
//     console.log(`Team: ${team}`)
//     console.log(`Coach: ${coach}`)
//     console.log(`Players: ${members.join(', ')}`)
// }

// printTeam('Liberty', 'Case Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

const printTeam = (team, coach, ...members) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${members.join(', ')}`)
    // console.log(firstPlayer, secondPlayer)
}

const team = {
    name: 'Liberty',
    coach: 'Case Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

// printTeam(team.name, team.coach, ...team.players)

// const cities = ['Barcelona', 'Cape Town', 'Helsinki']
// const citiesCopy = ['Santiago', ...cities]

let cities = ['Barcelona', 'Cape Town', 'Helsinki']
cities = ['Santiago', ...cities]

// citiesCopy.push('Santiago')

// console.log(cities)
// console.log(citiesCopy)

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    basement: true,
    bedrooms: 3,  // overwrites
    ...house,

}

// console.log(house)
// console.log(newHouse)

let person = {
    name: 'Lasse',
    age: 45
}

let location = {
    city: 'Vantaa',
    country: 'Finland'
}

let overview = {
    ...person,
    ...location
}

console.log(overview)
console.log(`My name is ${overview.name} 
and age ${overview.age}. I live at ${overview.city}, ${overview.country}.`)
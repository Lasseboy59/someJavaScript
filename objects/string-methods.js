let name = 'Lasse Ojala'

console.log(name.length);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

// let password = 'abcpassword3445'
// console.log(password.includes('password'));

let wholeName = '  Lauri Laakso  '
console.log((wholeName).trim());

// Challenge area
// isValidPassword
// length is more than 8 - and doesn't contain the word password



let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(howMany) {
        this.guestCount = this.guestCount + howMany;
    },
    removeParty: function(howMany) {
        this.guestCount = this.guestCount - howMany;
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));


// let x = isValidPassword('pasword12'); 

function isValidPassword(word) {
    return word.length > 8 && !word.includes('password')     
}

// console.log(x);

console.log(isValidPassword('asada'));
console.log(isValidPassword('asadaddad'));
console.log(isValidPassword('asapassworddad'));
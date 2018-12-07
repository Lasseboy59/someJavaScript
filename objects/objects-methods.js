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

// seatParty
// removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));


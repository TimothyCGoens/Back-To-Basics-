let restaurant = {
    name: 'Freebirds',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}
 

console.log(restaurant.guestCount)
restaurant.seatParty(50)
console.log(restaurant.guestCount)
console.log(restaurant.checkAvailability(4))
restaurant.seatParty(26)
console.log(restaurant.checkAvailability(4))
console.log(restaurant.guestCount)
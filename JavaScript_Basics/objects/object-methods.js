// RESTAURANT SEAT AVAILABILITY 
let restaurant = {
    name: 'Amarillo',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatLeft = this.guestCapacity - this.guestCount 
        return partySize <= seatLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

//let's check guestCount and it should be zero 0 now
console.log(restaurant.guestCount) // 0

//let's add 72 customers and check guestCount, now it should be 72
restaurant.seatParty(72)
console.log(restaurant.guestCount) // 72


//check availability
//for two. current status 72/75 (74)
console.log(restaurant.checkAvailability(2)) // true
//for three. current status 72/75 (75)
console.log(restaurant.checkAvailability(3)) // true
//for four. current status 72/75 (76)
console.log(restaurant.checkAvailability(4)) // false


//remove 4 people canceled reservation, check guesCount, it should drop from 72 to 68
restaurant.removeParty(4)
console.log(restaurant.guestCount) // 68

//2 more people canceled reservation, check guestCount, it should drop from 68 to 66
restaurant.removeParty(2)
console.log(restaurant.guestCount) // 66

// a customer is asking if there are room for 10 people if yes book reservation
console.log(restaurant.checkAvailability(10)) // false because it would be 76

// a customer is asking if there are room for 7, if yes book them a table
console.log(restaurant.checkAvailability(7))
restaurant.seatParty(7)

// a customer is asking for available place (guestCount should be 73 so room for 2)
console.log(restaurant.guestCount) // 73 
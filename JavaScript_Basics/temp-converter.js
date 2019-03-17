// Question-) Convert 32 fahrenheit to both celcius and kelvin.
// 32 fahrenheit = 0 celcius
// 32 fahrenheit = 273.15 kelvin
// formula T(°C) = (T(°F) - 32) × 5/9
// formula T(K) = (T(°F) + 459.67)× 5/9


let fahrenheit = 32;
let celcius = (fahrenheit -32) * 5 / 9;
let kelvin = (fahrenheit + 459.67) * 5 / 9;

console.log(`${fahrenheit} F, ${celcius} C, ${kelvin} K`) // 32 F, 0 C, 273.15 K

let temp = 1
let isFreezing = temp <= 1
console.log(isFreezing)

///function object method

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheitTemp: fahrenheit,
        kelvinTemp: (fahrenheit + 459.67) * 5 / 9,
        celciusTemp: (fahrenheit - 32) * 5 / 9
    }
}

console.log(convertFahrenheit(32))


//------------------------------------------------------------
// Challenge

// Create age set to your age
// Calculate is child - if they are 7 or under
// Calculate is senior - if they are 65 or older
// print child value and senior value

let myAge = 31
let childAge = myAge <= 7
let seniorAge = myAge >= 65

let childAndSeniorTicketPrice = 5
let adultTicketPrice = 25

if (childAge === true) {
    console.log(`You are a child, the ticket price is ${childAndSeniorTicketPrice} €`)
}else if (seniorAge === true) {
    console.log(`You are a seniour, your ticket price is ${childAndSeniorTicketPrice} €`)
} else {
    console.log(`You are an adult. The ticket price is ${adultTicketPrice} €`)
}

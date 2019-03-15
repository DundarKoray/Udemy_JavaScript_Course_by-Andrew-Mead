/********
* OBJECTS
*/

let cars = {
    manufacturer: 'Honda',
    model: 'Civic',
    engineSize: 2.0,
    price: 35000,
    year: 2018,
    carDealer: 'Delta Auto ',
    country: 'Finland'
}

// CHALLENGE
// print the object
console.log(cars) // {manufacturer: "Honda", model: "Civic", engineSize: 2, price: 35000, year: 2018, …}


// Create a function called 'blogPost' saying: The brand new 2018 Honda Civic just hit the market. The 2.0 engine size costs 35000 € in Delta Auto , Finland.
function blogPost () {
    return `The brand new ${cars.year} ${cars.manufacturer} ${cars.model} just hit the market. The ${cars.engineSize.toFixed(1)} engine size costs ${cars.price} € in ${cars.carDealer}, ${cars.country}.`
}

console.log(blogPost())

// Change the year from 2018 to 2019 by overwriting it and call the 'blogPost' function 
cars.year = 2019;
console.log(blogPost())

//--------------------------------------------

// CHALLENGE
// Create an object called 'person' which inlcudes name, age, location
// Print similar; 'Koray is 30 years old and he lives in London.'
// Update the city from London to Helsinki and print it again

let person = {
    name: 'Koray',
    age: 30,
    city: 'London'
}

console.log(`${person.name} is ${person.age} years old and he lives in ${person.city}.`)

person.city= 'Helsinki'
console.log(`${person.name} is ${person.age} years old and he lives in ${person.city}.`)

//-------------------------------------------


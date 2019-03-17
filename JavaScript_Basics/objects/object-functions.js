 let honda = {
     brand: 'Honda',
     model: 'Civic',
     year: 2014,
     engineSize: 1.6,
     price: '13000€',
     sellerName: 'Hari',
     place: 'Turku',
     mobileNo: '0453164***'
 }

 let audi ={
     brand: 'Audi',
     model: 'A4',
     year: 2003,
     engineSize: 2.0,
     price: '7000€',
     sellerName: 'Koray',
     place: 'Helsinki',
     mobileNo: '045160****'
 }




 
 let callTheCar = function (car) {
     return `You picked a ${car.year} model ${car.brand} ${car.model}. The seller's name is ${car.sellerName} from ${car.place}. Mobile no: ${car.mobileNo}`
 }

 console.log(callTheCar(honda))
 console.log(callTheCar(audi))





 let carSummary = function (car) {
     return {
         brand: `${car.brand}`,
         model: `${car.model}`,
         seller: `${car.sellerName}`
     }
 }

 console.log(carSummary(honda))



 ///////////////
 // Question-) Convert fahrenheit to both celcius and kelvin.
// formula T(°C) = (T(°F) - 32) × 5/9
// formula T(K) = (T(°F) + 459.67)× 5/9

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheitTemp: fahrenheit,
        kelvinTemp: (fahrenheit + 459.67) * 5 / 9,
        celciusTemp: (fahrenheit - 32) * 5 / 9
    }
}

let temperature = convertFahrenheit(32)
console.log(temperature)
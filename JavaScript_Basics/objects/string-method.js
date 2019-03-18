let name = 'Koray Dündar'

// length : it counts the letters including space
console.log(name.length) // 12(including the space)

// toUpperCase(): It converts to upper case. 
console.log(name.toUpperCase()) // KORAY DÜNDAR

// toLowerCase(): It converts to lower case.
console.log(name.toLowerCase()) // koray dündar

// includes(): It checks if the word exists in the string.
let password = 'abc123password098'
console.log(password.includes('password')) // true

// trim(): Removes the white space at the begining and end
let user1 = ' Aleksi Mansikka-aho '
console.log(user1)
// length of user1 is 21 because there are white spaces at the beginning, middle,end
console.log(user1.length) // 21

//lets remove the white space at the beginning and end for user1 by using trim method
console.log(user1.trim().length) // 19

// Challenge Area

//isValidPassword
//length is more than 8 - and it doesn't contain the word password

isValidPassword = function (password) {
    if (password.length < 9 || password.includes('password')) {
        return `invalid password`
    } else {
        return `the password is saved.`
    }
}

console.log(isValidPassword('asdsw')) // it fails because it is short, lass than 9
console.log(isValidPassword('abc123@*4323op')) // this will pass 
console.log(isValidPassword('edw2password')) // it fails coz contains word 'password'

////////


class PersonClass {
    constructor(firstName, lastName, age, likes =[]){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
        this.point = 0
    }
    get increasePoint() {
        this.point = this.point + 5
    }

    decreasePoint(x) {
        this.point = this.point - x
    }


}

const personKoray = new PersonClass('Koray', 'Dündar', 29, ['Coding', 'Scuba-Diving', 'Fishing', 'Playing guitar'])
console.log(personKoray)

const personSimon = new PersonClass('Simon', 'Maher', 40, ['Swimming', 'Cooking'])
console.log(personSimon)

const personHari = new PersonClass('Hari', 'Basnet', 26, ['Running', 'Singin', 'Driving'], 24)
console.log(personHari)

personKoray.increasePoint
console.log(personKoray);

personHari.decreasePoint(3)
console.log(personHari);

personKoray.decreasePoint(2)
console.log(personKoray);




class Test extends PersonClass {}
const personAnna = new Test('Anna', 'Dündar', 32, ['Reading book'])
console.log(personAnna)
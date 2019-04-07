const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain' 
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'

}]

const filters = {
    searchText: ''
};

// const user = {
//     name: 'Andrew',
//     age: 27
// }

// const userJSON = JSON.stringify(user)
// console.log(user); 
// console.log(userJSON); // result is string
// localStorage.setItem('user', userJSON)

const userJSON = localStorage.getItem('user') // result is string, we ll convert it to object
console.log(userJSON)
const user = JSON.parse(userJSON) // this converts string to back to object
console.log(`${user.name} is ${user.age} years old.`)
console.log(user)
//LOCAL STORAGE

//to store
// localStorage.setItem('location', 'Helsinki')

//to get
// console.log(localStorage.getItem('location'))

//to delete an item
// localStorage.removeItem('location')

//to delete everything
// localStorage.clear()
//---------------




const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
} 

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'OMG Somebody CLICKED me!';
    console.log('Did this work? YES IT DID');
})




document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})


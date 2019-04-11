const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
   notes.push({
       title: '',
       body: ''
   })
   saveNotes(notes)
   renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})














//LOCAL STORAGE (study notes)

//to store
// localStorage.setItem('location', 'Helsinki')

//to get
// console.log(localStorage.getItem('location'))

//to delete an item
// localStorage.removeItem('location')

//to delete everything
// localStorage.clear()
//---------------


// const userJSON = JSON.stringify(user)
// console.log(user); 
// console.log(userJSON); // result is string
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user') // result is string, we ll convert it to object
// console.log(userJSON)
// const user = JSON.parse(userJSON) // this converts string to back to object
// console.log(`${user.name} is ${user.age} years old.`)
// console.log(user)
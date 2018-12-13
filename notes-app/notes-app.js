let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function (e) {
    const idVar = uuidv4()
    const timestamp = moment()
    notes.push({
         id: idVar,
         createdAt: timestamp,
         title: '',
         body: ''
    })
    saveNotes(notes)
    location.assign(`edit.html#${idVar}`)
})


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})


window.addEventListener('storage', function(e){
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const timestamp = moment()
const birthday = moment([1959, 07, 18, 2]); 
console.log(timestamp.toString())
console.log(timestamp.from(birthday))
console.log(timestamp > birthday)


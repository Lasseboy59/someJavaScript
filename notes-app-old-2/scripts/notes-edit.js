'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const recipeElement = document.querySelector('#note-recipe')

const removeElement = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if(!note) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
recipeElement.value = note.recipe


titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

recipeElement.addEventListener('input', (e) => {
    note.recipe = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) =>note.id === noteId)
        
        if(!note) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        recipeElement.value = note.recipe.ingredients
        lastEdited.textContent = generateLastEdited(note.updatedAt)
    }
})

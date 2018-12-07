// const todos = ['Make breakfast', 'Walk the dog', 'Go shopping', 'Take a break', 'Sing a song'];

// todos.splice(2,1);
// todos.push('Buy coffee');
// todos.shift()

// console.log(`You have ${todos.length} todos`)
// console.log(todos);

// todos.forEach(function(item, index){
//      console.log(`${index}. item: ${item}`)
// })

// console.log('------------')

// for(let i = 0; i < todos.length; i++){
//     console.log(`${i+1}. ${todos[i]}`)
// }

// console.log('------------')

// todos.forEach(function(item){
//     console.log(item)
// })

// const todos = ['Make breakfast', 'Walk the dog', 'Go shopping', 'Take a break', 'Sing a song'];
/*
const todos = [{
    text: 'Make breakfast',
    completed: true
},{
    text: 'Walk the dog',
    completed: true
},{
    text: 'Go shopping',
    completed: false
},{
    text: 'Go to movies',
    completed: false
    },{
}]

const findNotes = function(todos, query) {
    return note = todos.filter(function(note, index){
        const isTitleMatch = note.completed.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch 
    })
    
}


console.log(findNotes(todos, 'false'))
*/

/*
console.log(todos)
const findNote = function (todos, noteTitle){
    const index = todos.findIndex(function(note, index){
        return note.text.toLowerCase() === noteTitle.toLowerCase() 
    })
    if ( index > -1) {
        todos.splice(index)
    }
}

const note = findNote(todos, 'go shopping');
console.log(todos);
*/

/*

const ps = document.querySelectorAll('p')

const notes = [{
    title: 'My next trip',
    completed: 'true'
}, {
    title: 'Habbits to work on',
    completed: 'false'
}, {
    title: 'Office work',
    completed: 'false'
}]


const findNotes = function(notes, query) {
    return note = notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.completed.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch;
    })
    
}

console.log(findNotes(notes, 'true'))

*/

const todos = [{
    title: 'My next trip',
    completed: true
}, {
    title: 'Habbits to work on',
    completed: false
}, {
    title: 'Office work',
    completed: true
}, {
    title: 'Buy food',
    completed: false 
}]
const findTodos = function(todos, query) {
    return todo = todos.filter(function(todo, index){
        const isCompletedMatch = todo.completed.toLowerCase().includes(query.toLowerCase())
        return isCompletedMatch
    })
    
}
console.log(findTodos(todos, 'true'))

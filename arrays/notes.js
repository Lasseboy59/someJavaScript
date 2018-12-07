// const notes = ['Make breakfast', 'Walk the dog', 'Go shopping', 'Take a break', 'Sing a song'];
// const notes = ['Notes 1', 'Notes 2', 'Notes 3'];

// Delete 3rd item
// Add anew item onto the end
// remove the first item on the list

// notes.splice(2,1);
// console.log(notes);

// console.log('-------------');

// notes.push('This is the new last item');
// console.log(notes);

// console.log('-------------');

// notes.shift();
// console.log(notes);

// console.log(notes.pop());
// notes.push('My new note');

// console.log(notes.shift());
// notes.unshift('My first note');

// notes.splice(1, 0, 'This is the new second item'); // add item
// notes.splice(1, 1, 'This is the new second item'); // replace item

// notes[2] = 'This is now new note 3'


// console.log(notes.length);
// console.log(notes);

// const todos = ['Make breakfast', 'Walk the dog', 'Go shopping', 'Take a break', 'Sing a song'];

// todos.splice(2,1);
// todos.push('Buy coffee');
// todos.shift()

// // console.log(`You have ${todos.length} todos`)
// // console.log(todos);

// todos.forEach(function(item, index){
//     console.log(`${index}. item: ${item}`)
// })

// for(let i = 0; i < 5; i++){
//     console.log('test ' + i)
// }

// const notes = ['Note 1', 'Note 2', 'Note 3'];


// const findNote = function (notes, noteTitle){
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'office work');
// console.log(note);

// const index = notes.findIndex(function(note, index){
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })

// console.log(index)

/*
const todos = [{
    title: 'My next trip',
    completed: 'true'
}, {
    title: 'Habbits to work on',
    completed: 'false'
}, {
    title: 'Office work',
    completed: 'false'
}]

*/ 

/*
console.log(todos)

console.log('------------------')

const deleteNotes = function(todos, query) {
    return note = todos.filter(function(note, index){
        const isCompletedMatch = note.completed.toLowerCase().includes(query.toLowerCase())
        if(isCompletedMatch){
            console.log('index ' + index)
            todos.splice(index, 1)
        }
        return isCompletedMatch;
    })
    
}
console.log(deleteNotes(todos, 'true'))

console.log('--------------')

console.log(todos)

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

*/

/*
const notes = [{
    title: 'My next trip',
    body: 'to Spain'
}, {
    title: 'Habbits to work on',
    body: 'die hard'
}, {
    title: 'Office work',
    body: 'work done'
}]



const sortNotes = function(notes){
    notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0;
        }
    })
}

sortNotes(notes);
console.log(notes);

/*------------------------------------*/
console.log('-----------------------')

const todos = [{
    title: 'My next trip',
    completed: false
}, {
    title: 'Habbits to work on',
    completed: true
}, {
    title: 'Office work',
    completed: false
}]


const sortTodos = function(todos){
    todos.sort(function(a, b){
        if(!a.completed && b.completed) {
            return -1;
        } else if(!b.completed && a.completed) {
            return 1
        } else {
            return 0;
        }
    })
}

sortTodos(todos);
console.log(todos);



// const sortTodos = function(todos){
//     todos.sort(function(a, b){
//         if(a.completed.toLowerCase() > b.completed.toLowerCase()) {
//             return -1;
//         } else if(b.completed.toLowerCase() > a.completed.toLowerCase()) {
//             return 1
//         } else {
//             return 0;
//         }
//     })
// }
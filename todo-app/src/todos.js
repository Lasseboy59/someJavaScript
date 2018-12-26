// Setup the empty todos array

// loadTodos
// Arguments: none
// Return value: none

// saveTodos
// Arguments: none
// Return value: none

// getTodos
// Arguments: none
// Return value: todos array

// createTodo
// Arguments: todo text
// Return value: none

// removeTodo
// Arguments: id of todo to remove
// Return value: none

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// Make sure to call loadTodos and setup the exports

import uuidv4 from 'uuid/v4'
import moment from 'moment'

let todos = []

// Read exsisting todos from local storage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to local storage
const saveTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos))

const getTodos = () => todos

const createTodo = (text) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    console.log('createTodo: ' + text)
    todos.push({
        id: id,
        text: text, 
        completed: false 
    })
    saveTodos()

    return id
}

// Remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1) {
        todos.splice(todoIndex,1)
        saveTodos()
    }
}

// Toggle completed value for given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo){
        todo.completed = !todo.completed
    }
}


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

export { loadTodos ,saveTodos, getTodos, createTodo, removeTodo, toggleTodo, sortTodos }
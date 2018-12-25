// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage

import { setFilters, getFilters } from './filters'
import { loadTodos ,saveTodos, getTodos, createTodo, removeTodo, toggleTodo } from './todos'
import { renderTodos } from './views'

const todos = getTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos()

document.querySelector('#create-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    createTodo(text)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#hide-box').addEventListener('change', (e) => {

    setFilters({
        sortBy: e.target.checked
    })
    renderTodos()
})

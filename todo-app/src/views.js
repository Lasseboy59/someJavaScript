// renderTodos
// Arguments: none
// Return value: none

// generateTodoDOM
// Arguments: todo
// Return value: the todo element

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

// Make sure to set up the exports

import moment from 'moment'
import { getFilters } from './filters'
import { sortTodos, getTodos } from './todos'

// Render application todos based on filters
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    // let filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))
    let filteredTodos = todos

    // filteredTodos = filteredTodos.filter((todo) => {
    //     if(filters.hideCompleted){
    //         return !todo.completed
    //     } else {
    //         return true
    //     }
    // })

    // const incompleteTodos = filteredTodos.filter((todo) =>!todo.completed)

    todoEl.innerHTML = ''
    // todoEl.appendChild(generateSummaryDOM(incompleteTodos))
    todoEl.appendChild(generateSummaryDOM(todos))


   if(filteredTodos.length > 0){
    filteredTodos.forEach((todo) => {
        
        const p = generateTodoDOM(todo)
        todoEl.appendChild(p)
    })
   } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are NOPE todos to show'
        todoEl.appendChild(messageEl)

   }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEL = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const removeButton = document.createElement('button')


    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEL.appendChild(checkbox)   
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    }) 

   // Setup the todo title text  // CHECK THIS !!
    if(todo.text.length > 0){
        textEl.textContent = todo.text
    } else{
        textEl.textContent = 'Unnamed todo'
    }
    containerEL.appendChild(textEl)

    // Setup container
    todoEl.classList.add('list-item')
    containerEL.classList.add('list-item__container')
    todoEl.appendChild(containerEL)

    // Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        console.log(todo.id)
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    let summary = document.Element('h2')
    summary.classList.add('list-title')
    incompleteTodos.length >= 1 ? summary.textContent= `You have ${incompleteTodos.length} todos left` : 
    summary.textContent = `You have ${incompleteTodos.length} todo left`
  
    return summary
}

export { renderTodos, generateTodoDOM, generateSummaryDOM }
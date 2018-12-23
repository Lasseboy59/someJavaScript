'use strict'

// Fetch existing todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }

}

// Save todos to local storage
const saveTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos))

// Delete a todo from local storage
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1) {
        todos.splice(todoIndex,1)
    }
}

// Toggle completed value for given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo){
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')
    let filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))


    filteredTodos = filteredTodos.filter((todo) => {
        if(filters.hideCompleted){
            return !todo.completed
        } else {
            return true
        }
    })

    const incompleteTodos = filteredTodos.filter((todo) =>!todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))


   if(filteredTodos.length > 0){
    filteredTodos.forEach((todo) => {
        
        const p = generateTodoDOM(todo)
        todoEl.appendChild(p)
    })
   } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No todos to show'
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
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    incompleteTodos.length >= 1 ? summary.textContent= `You have ${incompleteTodos.length} todos left` : 
    summary.textContent = `You have ${incompleteTodos.length} todo left`
  
    return summary
}

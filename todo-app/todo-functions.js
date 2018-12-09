// Fetch existing todos from local storage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null){
        return JSON.parse(todosJSON)
    }else {
        return []
    }
}

// Save todos to local storage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Delete a todo from local storage
const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })

    if(todoIndex > -1) {
        todos.splice(todoIndex,1)
    }
}

// Render application notes
const renderTodos = function(todos, filters){
    let filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })



    filteredTodos = filteredTodos.filter(function(todo){
        if(filters.hideCompleted){
            return !todo.completed
        } else {
            return true
        }
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function(todo){
        const p = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(p)
    })
}

// Generate the DOM structure for a note
const generateTodoDOM = function(todo){
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const removeButton = document.createElement('button')


    // Setup the checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)    


   // Setup the todo title text
    if(todo.text.length > 0){
        textEl.textContent = todo.text
    } else{
        textEl.textContent = 'Unnamed todo'
    }

    todoEl.appendChild(textEl)
    // Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function(){
        console.log(todo.id)
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}

// read existing todos from local storage
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

    // const summary = document.createElement('h2')
    // summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function(todo){
        const p = generateTodoDOM(todo)
        // p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

// Generate the DOM structure for a note
const generateTodoDOM = function(todo){
    const todoEl = document.createElement('p')

    if(todo.text.length > 0){
        todoEl.textContent = todo.text
    } else{
        todoEl.textContent = 'Unnamed todo'
    }

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}

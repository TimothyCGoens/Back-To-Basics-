'use strict'

// fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}
// save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//remove todos by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// toggle the complete value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if(todo) {
        todo.completed = !todo.completed
    }
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDom(incompleteTodos))
    
    filteredTodos.forEach(function(todo) {
        document.querySelector('#todos').appendChild(generateTodoDom(todo))
    })
}
// get the DOM elements for an individual todo
const generateTodoDom = function (todo) {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')


    //Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // setup the todo text
    todoText.textContent = todo.item
    containerEl.appendChild(todoText)

    //set up container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    //setup the remove button 
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

const generateSummaryDom = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}
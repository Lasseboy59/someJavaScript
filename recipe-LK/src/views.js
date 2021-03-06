import moment from 'moment'
import { getFilters } from './filters';
import { sortRecipes, getRecipes } from './recipes'

// Generate the DOM structure for a recipe
const generateRecipeDom = (recipe) => {
    const recipeEL = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')
    const button = document.createElement('button')

    // Setup the recipe title text
    if(recipe.title.length > 0){
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'unnamed recipe'
    }

    recipeEL.classList.add('list-item__title')
    recipeEL.appendChild(textEl)

    // Setup the link
    recipeEL.setAttribute('href', `/edit.html#${recipe.id}`)
    recipeEL.classList.add('list-item')


    // Setup the statusmessage
    statusEl.textContent = generateLastEdited(recipe.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    recipeEL.appendChild(statusEl)

    return recipeEL
}

// Render application recipes
const renderRecipes = () => {
    const recipesEL = document.querySelector('#recipes')
    const filters = getFilters()
    const recipes = sortRecipes(filters.sortBy)
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))
 
    recipesEL.innerHTML = ''

    if(filteredRecipes.length > 0){
        filteredRecipes.forEach((recipe) => {
            const recipeEL = generateRecipeDom(recipe)
            recipesEL.appendChild(recipeEL)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No recipes to show'
        emptyMessage.classList.add('empty-message')
        recipesEL.appendChild(emptyMessage)
    }
}

const initializeEditPage = (recipeId) => {
    const titleElement = document.querySelector('#recipe-title')
    const bodyElement = document.querySelector('#recipe-body')
    const updateElement = document.querySelector('#last-edited')
    const recipes = getRecipes()
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    
    if(!recipe){
        location.assign('/index.html')
    }
    
    titleElement.value = recipe.title
    bodyElement.value = recipe.body
    updateElement.textContent = generateLastEdited(recipe.updatedAt)
}

 // Generate last edited message
 const generateLastEdited = (timestamp) => {
     return `Last edited ${moment(timestamp).fromNow()}`
 }

export { generateRecipeDom, generateLastEdited, renderRecipes, initializeEditPage }


const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

let notes = getSavedNotes()


let myObj, i
myObj = {
  "recipes": [
    {"name":"Onion soup", "ingredients":["eggs", "milk", "sugar"]},
  ]
}


// myObj.recipes.push[{'name':'mini', 'models':['minor']}]


// for (i in myObj.recipes) {
//     console.log(myObj.recipes[i].name)
//     console.log(myObj.recipes[i].ingredients)
// }
// console.log('-------------------')



for (i in myObj.recipes) {
    myObj.recipes.push({"name" : 'Pancake', "ingredients": ['milk','honey']})
}

for (i in myObj.recipes) {
    console.log(myObj.recipes[i].name)
    console.log(myObj.recipes[i].ingredients)
}


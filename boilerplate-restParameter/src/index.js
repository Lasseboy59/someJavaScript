import uuidv4 from 'uuid/v4'

// const getSavedNotes = () => {
//     const notesJSON = localStorage.getItem('notes')

//     try {
//         return notesJSON ? JSON.parse(notesJSON) : []
//     } catch (e) {
//         return []
//     }
// }

// let notes = getSavedNotes()

// let id = uuidv4()
// let myObj, i
// myObj = {
//     "recipes": [
//     {"id": id, "name":"Onion soup", "ingredients":["eggs", "milk", "sugar"]},
//   ]
// }


// for (i in myObj.recipes) {
//     myObj.recipes.push({"id": id, "name" : 'Pancake', "ingredients": ['milk','honey']})
// }

// for (i in myObj.recipes) {
//     console.log(myObj.recipes[i].id)
//     console.log(myObj.recipes[i].name)
//     console.log(myObj.recipes[i].ingredients)
// }

// https://codereview.stackexchange.com/questions/97818/transforming-data-from-an-array-of-objects-to-a-nested-array-of-objects

var original = [
    {
      datetime: '2015-07-22 09:00:00'
    },
    {
      datetime: '2015-07-22 11:00:00'
    },
    {
      datetime: '2015-07-23 10:00:00'
    }
  ];
  var result = [], 
      index = [];
    //   let id = uuidv4()
  
  for (var i in original) {
    var date = original[i].datetime,
        id = uuidv4(),
        day = date.substr(0,10),
        j = index.indexOf(day);
    if (j == -1) {
      // first instance for the current day, create it
      result.push({
        id: id,
        date: day,
        event: [],
      });
      // register its index
    //   index.push(id);
      index.push(day);
      // get this new index value
      j = index.length - 1;
    }
    // in any case, populate the right day with the current event
    result[j].event.push(date);
  }

  for(let i in original) {
    console.log(original[i])
  }


let myBook = { 
    title: '1984',
    'author': 'George Orwell',
    'pageCount': 343
 }

 console.log(`${myBook.title} by ${myBook.author} pages ${myBook.pageCount}`);

 myBook.title = 'Animal Farm';

 console.log(`${myBook.title} by ${myBook.author} pages ${myBook.pageCount}`);

 // Challenge area
 // name, age, location
 // Lauri is 27 and lives in Philadelphia

 let personFile = {
     name: 'Lasse',
     age: '45',
     location: 'Vantaa'
 }

 console.log(`${personFile.name} is ${personFile.age} and lives in ${personFile.location}`);

 personFile.age++;

 console.log(`${personFile.name} is ${personFile.age} and lives in ${personFile.location}`);

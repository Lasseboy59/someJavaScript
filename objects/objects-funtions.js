let myBook = { 
    title: '1984',
    'author': 'George Orwell',
    'pageCount': 343
 }


 let otherBook = { 
    title: 'A Peoples History',
    'author': 'Howard Zinn',
    'pageCount': 723
 }


 let getSummary = function(book) {
    return{
      summary: `${book.title} by ${book.author}`,
      pageCountSummary: `${book.title} pages ${book.pageCount}`
    }

    // console.log(`${book.title} by ${book.author} pages ${book.pageCount}`);
 }

 let bookSummary = getSummary(myBook);
 let otherBookSummary = getSummary(otherBook);

 console.log(bookSummary.pageCountSummary);
 console.log(otherBookSummary.summary);

// Challenge area
// Create function - take fahrenheit i n- return object with all three

let getTemperature = function(temp) {
   let celsius = (temp - 32) * 5/9;
   let kelvin = (temp + 459.67) * 5/9;
   return{
     fahrenheit: `${temp} Fahrenheit`,
     celsius: `${celsius} Celsius`,
     kelvin: `${kelvin} Kelvin`
   }
}

let temperature = getTemperature(32);
console.log(temperature.kelvin);

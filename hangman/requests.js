const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else{
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountryDetails = (countryCode) => {
    return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else{
            throw new Error('Unable to fetch coutry')
        }
    }).then((data) => {
        return data.find((country)=>country.alpha2Code===countryCode)
    })
}


// const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     const countryRequest = new XMLHttpRequest()
//     this.countryCode = countryCode
    
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             let countries = e.target.responseText
//             let code = 'alpha2code'
     
//             const country = data.find((country) => {
//                 if (country.alpha2Code === countryCode) {
//                     return true
//                 } else {
//                     return false
//                 }
//             })
//             resolve(country)
    
            
//         } else if(e.target.readyState === 4) {
//             reject('Unable to fetch data')
//         }
//     })
    
//     countryRequest.open('GET','http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })

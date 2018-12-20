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


const getLocation = () => {
    return fetch(`https://ipinfo.io/json?token=3d4e7ffcf7483a`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else{
            throw new Error('Unable to fetch puzzle')
        }
    })
}
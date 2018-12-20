const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getPuzzleOld = (wordCount) => {
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

const getCountryDetails = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`)

    if(response.status === 200) {
        const data = await response.json()
        return data.find((country)=>country.alpha2Code===countryCode)
    } else{
        throw new Error ('Unable to get data')
    }
}

const getCountryDetailsOld = (countryCode) => {
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

const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?token=3d4e7ffcf7483a`)

    if(response.status === 200){
        const location = await response.json()
        return location
    } else{
        throw new Error('Unable to get location')
    }
}

const getLocationOld = () => {
    return fetch(`https://ipinfo.io/json?token=3d4e7ffcf7483a`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else{
            throw new Error('Unable to fetch location')
        }
    })
}
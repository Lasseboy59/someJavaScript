const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        value = value
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses data object
data.location = '  Vantaa  '
data.location = ' New York'
console.log(data)
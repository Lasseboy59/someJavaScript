const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    }
}


// C:\Users\lauri\JavaScript_AM\boilerplate\public\scripts
// __dirname \public\scripts
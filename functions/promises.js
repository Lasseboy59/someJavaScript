// Callback

const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if(typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

// NOT THIS !!
// getDataCallback(2,(err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         getDataCallback(data, (err,data) => {
//             if(err){
//                 console.log('err')
//             }else {
//                 console.log(data)
//             }
//         })
//     }
// })

// Promise
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('This is the promise data')
//         reject('This is my promise error')
//     }, 2000)
// })

// const getDataPromise = (data) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`This is my success data: ${data}`)
//         // reject('This is my promise error')
//     }, 2000)
// })

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

// const myPromise = getDataPromise(123)

// myPromise.then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

getDataPromise(2).then((data)=> {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (error)=> {
    console.log(err)
})

// Promise chaining
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return 'this is some test data'
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

// Promise chaining 2
getDataPromise(2).then((data) => {
    return data
}).then((data) => {
    console.log(data)
})
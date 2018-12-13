// Unix Epoch - Jan 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(now.toString())
// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const dateOne = new Date('Jan 3 1970 00:00:00')
const dateTwo = new Date('Jan 2 1970 00:00:00')
const timestamp1 = dateOne.getTime()
const timestamp2 = dateTwo.getTime()


 if(timestamp1 < timestamp2){
     console.log(dateOne.toString())
 }else {
     console.log(dateTwo.toString())
 }
 

 // moment()

 // const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format("MMMM,Do,YYYY"))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

const birthday = moment()
// const birthday = moment([1959, 07, 18, 2]);   
birthday.year(1959).month(06).day(18)
// console.log(birthday.toString())
console.log(birthday.format("MMM D, YYYY"))
console.log(birthday.fromNow())

const timestamp = moment()
const birthday = moment([1959, 07, 18, 2]); 
console.log(timestamp.toString())
console.log(timestamp.from(birthday))
console.log(timestamp > birthday)
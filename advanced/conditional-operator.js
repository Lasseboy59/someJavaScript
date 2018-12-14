// const myAge = 27;
// const message = myAge >= 18 ? 'You can vote' : 'You can not vote'

// console.log(message)

const myAge = 20
const showPage = () => {
    return 'Showing age'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()

console.log(message)

const team = ['Tyler', 'Porter', 'Tim', 'Allen', 'John']

const message_2 = team.length <= 4 ? `Team size: ${team.length}` : `Too many peole in your team`

console.log(message_2)
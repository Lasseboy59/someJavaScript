// let myAccount = {
//     name: 'Andrew Mead',
//     expenses: 0,
//     income: 0
// }

// let otherAccount = myAccount;
// otherAccount.income = 200;
// otherAccount = {}

// let addExpense = function(account, amount) {
//     account.expenses = account.expenses + amount;
// }

// addExpense(myAccount, 2.50);
// console.log(myAccount);


// addIncome
// resetAccount
// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expense.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

let myAccount = {
    name: 'Andrew',
    expenses: 0,
    income: 0,
    total: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
    account.total = account.total - amount;
}

let addIncome = function(account, amount) {
    account.income = account.income + amount;
    account.total = account.total + amount;
}

let resetAccount = function(account) {
    account.name = 'Anonymous';
    account.expenses = 0;
    account.income = 0;
    account.total = 0;
}

let getAccountSummary = function(account) {
    account.expenses;
    account.income;
    return `Account for ${account.name} has $${account.total}. $${account.income} in income and $${account.expenses} in expenses`;
}

addIncome(myAccount, 100);
addExpense(myAccount, 2.50);
addExpense(myAccount, 3.50);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

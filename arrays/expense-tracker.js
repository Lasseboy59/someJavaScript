const account = {
    name: 'Lasse Otala',
    expenses: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    incomes: [],
    addIncome: function(description, amount){
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncomes = 0;
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        this.incomes.forEach(function(income){
            totalIncomes = totalIncomes +income.amount
        })
        
        return `${this.name} has a balance of $${totalIncomes - totalExpenses}. $${totalIncomes} in income. $${totalExpenses} in expenses.`
    }

}


// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Lasse Ojala has $1250 in expenses.


account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());

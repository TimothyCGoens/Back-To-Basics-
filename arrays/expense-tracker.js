const account = {
    name: 'Tim',
    expense: [],
    income: [],
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function(description, amount) {
        this.expense.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
       let totalExpense = 0
       let totalIncome = 0
       this.expense.forEach(function(expense) {
           totalExpense = totalExpense += expense.amount
       })
       this.income.forEach(function (income) {
           totalIncome = totalIncome += income.amount
       })
       let balance = totalIncome - totalExpense
       return `${this.name} has a balance of $${balance}. $${totalIncome} in income and $${totalExpense} in expenses.`
    }
}



account.addIncome('Job', 1000)
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2.50)
console.log(account.getAccountSummary())


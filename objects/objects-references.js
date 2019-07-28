let myAccount = {
    name: 'Tim Goens',
    expenses: 0,
    income: 0
}


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.expenses + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let accountSummary = function (account) {
    return `${account.name}'s account has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 69.00)
addExpense(myAccount, 4.20)
addExpense(myAccount, 4.20)
console.log(accountSummary(myAccount))
resetAccount(myAccount)
console.log(accountSummary(myAccount))
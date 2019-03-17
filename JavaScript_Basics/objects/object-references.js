// Create an object called 'myAccount' with name, expenses and income.
// Set income and expenses to zero and name to 'your name' 


let myAccount = {
    name: 'Koray',
    expenses: 0,
    income: 0,
    balance:0 
}

// ADD EXPENSES (addExpense): 
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    account.balance = account.balance - amount
}


// ADD INCOME (addIncome):
let addIncome = function (account, amount) {
    account.income = account.income + amount
    account.balance = account.balance + amount
}


// ADD SOME EXPENSES AND INCOME
addIncome(myAccount, 600)
console.log(myAccount) // {name: "Koray", expenses: 0, income: 600, balance: 600}

addExpense(myAccount, 200)
console.log(myAccount) // {name: "Koray", expenses: 200, income: 600, balance: 400}

addIncome(myAccount, 100)
console.log(myAccount) // {name: "Koray", expenses: 200, income: 700, balance: 500}

addExpense(myAccount, 400)
console.log(myAccount) // {name: "Koray", expenses: 600, income: 700, balance: 100}


// RESET INCOME (resetIncome):
let resetIncome = function (account) {
    account.expenses = 0,
    account.income = 0,
    account.balance = 0 
}

resetIncome(myAccount)
console.log(myAccount) // {name: "Koray", expenses: 0, income: 0, balance: 0}


// GET ACCOUNT SUMMARY
let getAccountSummary = function (account){
    return `Your current balance is € ${account.balance}. (Total income: € ${account.income} - TOTAL expense: € ${account.expenses})`
}

console.log(getAccountSummary(myAccount)) // Your current balance is € 0. (Total income: € 0 - TOTAL expense: € 0)



// ADD WARNING MESSAGE: Notify user if they have less than 100€.
if (myAccount.balance <= 100){
    console.log(`You have only ${myAccount.balance} euro letf, in your account, spend carefully`)
}




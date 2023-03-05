const form = document.querySelector('.form')
const nameTransaction = document.querySelector('#name-transaction')
const valueTransaction = document.querySelector('#value-transaction')
const bntAdd = document.querySelector('#bnt-add')
const saldoAtual = document.querySelector('#saldo-atual')
const receitasValue = document.querySelector('#Receitas-value')
const despesasValue = document.querySelector('#Despesas-value')
const listTransactions = document.querySelector('.list-transactions')
const inputTransactionName = document.querySelector('#name-transaction')
const inputTransactionAmount = document.querySelector('#value-transaction')
const bntDelete = document.getElementsByTagName('i')

const localStorageTransactions = JSON.parse(localStorage
    .getItem('transactions'))
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []

const removeTransaction = ID => {
    transactions = transactions
        .filter(transaction => transaction.id !== ID)
    init()
    updateLocalStorange()

}

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const cssclass = transaction.amount < 0 ? 'minus' : 'plus'
    const contentValue = transaction.amount < 0 ? 'minus-velue' : 'plus-velue'


    const amountWithoutOperator = Math.abs(transaction.amount)


    const i = document.createElement('i')
    const p = document.createElement('p')
    const creatIcom = document.createElement('div')
    const divValue = document.createElement('div')
    const li = document.createElement('li')

    divValue.classList.add(contentValue)
    li.classList.add(cssclass)

    i.innerHTML = `<buttom class="fa-solid fa-trash-can" onclick="removeTransaction(${transaction.id})">`
    p.innerHTML = `${transaction.name}`
    divValue.innerHTML = `${operator} R$ ${amountWithoutOperator}`
    listTransactions.append(li)


    li.append(i)
    li.append(p)
    li.append(divValue)
}

const updateBalanceValues = () => {
    const transactionAmouts = transactions
        .map(transac => transac.amount)
    const transactionPlus = transactionAmouts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0).toFixed(2)
    const transactionMinus = Math.abs(transactionAmouts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0).toFixed(2))
    const sum = transactionAmouts
        .reduce((acc, item) => acc + item, 0).toFixed(2)

    saldoAtual.textContent = `R$ ${sum}`
    receitasValue.textContent = ` + R$ ${transactionPlus}`
    despesasValue.textContent = ` - R$ ${transactionMinus.toFixed(2)}`

}

const init = () => {
    listTransactions.innerHTML = ""
    transactions.forEach(addTransactionIntoDom)
    updateBalanceValues()
}

init()

const updateLocalStorange = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

const generateID = () => Math.round(Math.random() * 1000)

form.addEventListener('submit', Event => {
    Event.preventDefault()

    const transactionName = inputTransactionName.value.trim()
    const transactionAmout = inputTransactionAmount.value.trim()

    if (transactionName === "" || transactionAmout === "") {
        alert('Por favor preencha tato o Nome quanto o Valor da transação')
        return
    }

    const transaction = {
        id: generateID(),
        name: transactionName,
        amount: Number(transactionAmout)
    }
    transactions.push(transaction)
    init()
    updateLocalStorange()
    inputTransactionName.value = ""
    inputTransactionAmount.value = ""
})
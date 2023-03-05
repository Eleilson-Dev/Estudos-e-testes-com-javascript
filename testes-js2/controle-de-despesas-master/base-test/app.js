// primeiro passo 1 coletar todos os dados iniciais necessarios;
const balance = document.querySelector('#balance');
const moneyPlus = document.querySelector('#money-plus');
const moneyMinus = document.querySelector('#money-minus');
const listTransactions = document.querySelector('#transactions');
const form = document.querySelector('#form');
const inputText = document.querySelector('#text');
const inputNumber = document.querySelector('#amount');
const deleteBtn = document.querySelector('.delete-btn');

// segundo passo 2 criar um array pra servir se teste ao longo do sesenvolvimento;
// let transactions = [
//     {id: 1, name: 'bolo de brigadeiro', amount: -20},
//     {id: 2, name: 'Salário', amount: 300},
//     {id: 3, name: 'Torta de frango', amount: -10},
//     {id: 4, name: 'Violão', amount: 150},
// ];

// nono passo 9, criar função que recebe as transações do localstorage;
const localstorageTransaction = JSON
    .parse(localStorage
    .getItem('transaction'));
let transactions = localStorage
    .getItem('transaction') !== null ? localstorageTransaction : [];

// oitavo passo 8, Criar um function que remove as operacoes do array de acordo com o seu ID;
// ela ira reatribuir os valores do array base com o filter caso o ID selecionado for diferente 
// de todos os outros ID essa operação não será adicionada no novo array;
// logo apos ela ira invocar a init() pra atualizar o display e invocara tambem a 
//updateLocalstorage pra atualiza o localstorage aqui tambem
const removeTransaction = (ID) => {
    transactions = transactions.filter(item => item.id !== ID);
    init()
    updateLocalstorage();
}

// terceiro passo 3, cria a função que sera reponsavel por criar a li e adicionar ela dentro da ul;
const addTransactionsInToDom = (transaction) => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
    const amountWithOutOperator = Math.abs(transaction.amount);
    const li = document.createElement('li');
    li.classList.add(CSSClass);
    li.innerHTML = `
        ${transaction.name} 
        <span>${operator} R$ ${amountWithOutOperator}</span>
        <button class="delete-btn" onClick="removeTransaction(${transaction.id})">
            X
        </button>
    `;
    listTransactions.append(li);
};
// quinto passo 5, criar a function que faz os calculos apartir do array base, os calculos são 
// calcular o tatal, calcular os valores plus e os valores minus, adicionar eles na tela;
// essa function será executada dentro da init();
const updateBalanceValues = () => {
    const trasactionsAmounts = transactions
        .map(item => item.amount);
    const total = trasactionsAmounts
        .reduce((acm, item ) => acm + item, 0)
        .toFixed(2);
    const income = trasactionsAmounts
        .filter(item => item > 0)
        .reduce((acm, item ) => acm + item, 0)
        .toFixed(2);
    const expense = Math.abs(trasactionsAmounts
        .filter(item => item < 0)
        .reduce((acm, item ) => acm + item, 0)
        .toFixed(2));
    
    balance.textContent = `R$ ${total}`;
    moneyPlus.textContent = `R$ ${income}`;
    moneyMinus.textContent = `R$ ${expense}`;
}
// quarto passo 4, criar a função que sera responsavel por executar um loop com o array no qual para cada item do array sera executada a função que cria as li;
const init = () => {
    listTransactions.innerHTML = '';
    transactions.forEach(addTransactionsInToDom);
    updateBalanceValues();
}

// setimo passo 7. criar uma function que gera um ID aleatorio;;
const generateID = () => Math.round(Math.random() * 1000);

// obs: a função init() deve ser executada no escopo global da aplicação
init()

// decimo passo 10, criar função que adiciona as transações no localstorage;
const updateLocalstorage = () => {
    localStorage.setItem('transaction', JSON.stringify(transactions));
}

// sexto passo 6, essa function primeiro ira verificar se os inputs estão preenchidods
//corretamento depois ela ira pegar os valores do inputs e montar um objeto.;
//depois ela ira fazer um push com o objeto dentro do array de objetos 
// entao ela irá invocar a init() pra atualizar o sistema com os novos valores do array de objs;
// ela ela tambem ira invocar a function updateLocalstorage pra atualizar o local storage com os
// novos valores.
form.addEventListener('submit', (Event) => {
    Event.preventDefault();
    const transactionName = inputText.value.trim() 
    const transactionAmount = inputNumber.value.trim();
    if(transactionName === '' || transactionAmount === '') {
        alert('Por favor prencha tanto o nome quanto o valor da transação');
        return
    }
    const transaction =     {
        id: generateID(),
        name: transactionName,
        amount: Number(transactionAmount) 
    };
    transactions.push(transaction);
    inputText.value = '';
    inputNumber.value = '';
    init();
    updateLocalstorage();
});
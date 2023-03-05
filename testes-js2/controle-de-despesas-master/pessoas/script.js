const inputName = document.querySelector('#input-nome');
const inputSobrenome = document.querySelector('#input-sobrenome');
const form = document.querySelector('#form-submit');
const listUL = document.querySelector('.list');

const getPesssoaInLocalstorage = JSON.parse(localStorage.getItem('Pessoas'))
let arrayPessoas = localStorage.getItem('Pessoas') !== null ? getPesssoaInLocalstorage : [];

const addPessoasInToDom = (pessoas) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="div-li-left">
            <p><strong>ID</strong></p>
            <p><strong>Fisrt Name</strong></p>
            <p><strong>Last Name</strong></p>
        </div>
        <div class="div-li-right">
            <p>: ${pessoas.id}</p>
            <p>: ${pessoas.nome}</p>
            <p>: ${pessoas.sobrenome}</p>
        </div>
        <button id="btn-delete" onClick="removePessoa(${pessoas.id})">X</button>
    `;
    listUL.append(li);
} 

const removePessoa = (ID) => {
    arrayPessoas = arrayPessoas.filter(item => item.id !== ID);
    init();
    updateLocalstorage()
}

const generateID = () => Math.round(Math.random() * 1000);

const init = () => {
    listUL.innerHTML = '';
    arrayPessoas.forEach(addPessoasInToDom);
}

init()

const updateLocalstorage = () => {
    localStorage.setItem('Pessoas', JSON.stringify(arrayPessoas));
};











form.addEventListener('submit', (Event) => {
    Event.preventDefault();
    const nome = inputName.value.trim();
    const sobrenome = inputSobrenome.value.trim();
    if(nome === '' || sobrenome === '') {
        alert('Preencha tanto nome quanto sobrenome');
        return
    }
    const pessoa = {id: generateID(), nome: nome, sobrenome: sobrenome};
    arrayPessoas.push(pessoa);
    inputName.value = '';
    inputSobrenome.value = '';
    init();
    updateLocalstorage();
})
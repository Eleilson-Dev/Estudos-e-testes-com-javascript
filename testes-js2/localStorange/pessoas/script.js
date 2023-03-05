const arrayToObj = [];
const pessoasAdicionadas = document.querySelector('.pessoas-adicionadas');
const formInput = document.querySelector('.add-cad-pessoas');
const nome = document.querySelector('#nome');;
let nomeIsValid;
const sobrenome = document.querySelector('#sobrenome');
let sobrenomeIsValid;
const idade = document.querySelector('#idade');
let idadeIsValid;
const altura = document.querySelector('#altura');
let alturaIsValid;

const validaCampos = () => {
    if (nome.value.trim().length > 0) {
        nomeIsValid = true;
        nome.classList.remove('error');
    } else {
        nomeIsValid = false;
        nome.classList.add('error');
    }
    if (sobrenome.value.trim().length > 0) {
        sobrenomeIsValid = true;
        sobrenome.classList.remove('error');
    } else {
        sobrenomeIsValid = false;
        sobrenome.classList.add('error');
    }
    if (idade.value.trim().length > 0) {
        idadeIsValid = true;
        idade.classList.remove('error');
    } else {
        idadeIsValid = false;
        idade.classList.add('error');
    }
    if (altura.value.trim().length > 0) {
        alturaIsValid = true;
        altura.classList.remove('error');
    } else {
        alturaIsValid = false;
        altura.classList.add('error');
    }
}

const limpaInput = () => {
    nome.value = '';
    sobrenome.value = '';
    idade.value = '';
    altura.value = '';
    nome.focus();
}

const verificaCampos = () => {
    validaCampos()
    const validado = nomeIsValid && sobrenomeIsValid && idadeIsValid && alturaIsValid
    return validado
}

const criaPessoa = (nome, sobrenome, idade, altura) => {
    const obj = { nome: nome, sobrenome: sobrenome, idade: idade, altura: altura };
    arrayToObj.push(obj)
    pessoasAdicionadas.appendChild(criaTagsDaUl(nome, sobrenome, idade, altura))
    const stringifyArray = JSON.stringify(arrayToObj);
    localStorage.setItem('pessoas', stringifyArray);
}

const localStorageLoop = () => {
    const jsonParse = JSON.parse(localStorage.getItem('pessoas')) || 0;
    if(jsonParse.length > 0) {
        jsonParse.forEach((element, index) => {
            arrayToObj.push(element)
            const {nome, sobrenome, idade, altura } = jsonParse[index];
            pessoasAdicionadas.appendChild(criaTagsDaUl(nome, sobrenome, idade, altura))
        });
    }
}

const criaTagsDaUl = (nome, sobrenome, idade, altura) => {
    const ul = document.createElement('ul');
    ul.classList.add('pessoa');
    const li1 = document.createElement('li');
    li1.classList.add('nome');
    li1.innerHTML = `Nome:<p>${nome}</p>`;
    const li2 = document.createElement('li');
    li2.classList.add('sobrenome');
    li2.innerHTML = `Sobrenome:<p>${sobrenome}</p>`;
    const li3 = document.createElement('li');
    li3.classList.add('idade');
    li3.innerHTML = `Idade:<p>${idade}</p>`;
    const li4 = document.createElement('li');
    li4.classList.add('altura');
    li4.innerHTML = `Altura:<p>${altura}</p>`;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    return ul;
}

localStorageLoop()

formInput.addEventListener('submit', (Event) => {
    Event.preventDefault();
    if (verificaCampos()) {
        criaPessoa(nome.value, sobrenome.value, idade.value, altura.value);
        limpaInput();
    } else {
        console.log('tudo errado')
    }
});
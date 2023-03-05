const nome = document.querySelector('#name');
const bnt = document.querySelector('#bnt');
const h1Name = document.querySelector('.name');

class MeuNome {
    constructor(nome){
        this.nome = nome;
    }
}

bnt.addEventListener('click', () => {
    const p1 = new MeuNome(nome.value);
    h1Name.innerHTML += p1.nome;
})
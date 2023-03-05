const bntAdd = document.querySelector('#add-item');
const ul = document.querySelector('ul');

let = arrayObjetos = [
    {id: 245, nome: 457},
    {id: 568, nome: 847},
    {id: 1124, nome: 347},
];

const idAleatorio = (min = 1, max = 10000) => {
    const id = Math.floor(Math.random() * (min + max) - min);
    return id;
}

bntAdd.addEventListener('click', () => {
    const obj = {id: idAleatorio(), nome: idAleatorio()};
    arrayObjetos.push(obj);
    init()
});

const removeItem = (ID) => {
    arrayObjetos = arrayObjetos.filter(item => item.id !== ID);
    console.log('click no X')
}

const init = () => {
    arrayObjetos.forEach(element => {
        criaTags(element.id, element.nome);
    });
}

const criaTags = (id, nome) => {
    const li = document.createElement('li');
    li.innerHTML = `ID ${id}  Nome:${nome} <button onClick="removeItem(${id})">X</button> `
    ul.appendChild(li);
}

init()

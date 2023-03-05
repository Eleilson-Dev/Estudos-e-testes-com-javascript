const inputTaskConteiner = document.querySelector('#addTask');
const addBnt = document.querySelector('#addBnt');
const Newtasks = document.querySelector('.New-tasks');
let valores = []

const validateInput = () => inputTaskConteiner.value.trim();

const handleInput = () => {
    const inputIsvalid = validateInput()
    valores.push(String(inputTaskConteiner.value))

    if (!inputIsvalid) {
        return inputTaskConteiner.classList.add('error')
    };

    const taskItemconteiner = document.createElement('div');
    taskItemconteiner.classList.add('task-item-conteiner');

    const taskConteiner2 = document.createElement('div');
    taskConteiner2.classList.add('task-Conteiner-2');

    const checkItem = document.createElement('i');
    checkItem.classList.add('fa-solid')
    checkItem.classList.add('fa-check')

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa')
    deleteItem.classList.add('fa-trash-o')

    const taskItem = document.createElement('p');
    taskItem.innerHTML = inputTaskConteiner.value;

    Newtasks.appendChild(taskItemconteiner)

    taskItemconteiner.appendChild(taskConteiner2)

    taskItemconteiner.appendChild(taskItem)

    taskConteiner2.appendChild(deleteItem)

    taskConteiner2.appendChild(checkItem)


    const handleDeleteClick = () => {

        taskItemconteiner.remove()
        valores.splice(-1)

    }
    const chekeClick = () => {
        taskItem.classList.add('check')
    }

    deleteItem.addEventListener('click', () => handleDeleteClick())
    checkItem.addEventListener('click', () => chekeClick())

    inputTaskConteiner.value = ""

}
const handleInputChange = () => {
    const inputIsvalid = validateInput()

    if (inputIsvalid) {
        return inputTaskConteiner.classList.remove('error')
    }
}

addBnt.addEventListener('click', () => handleInput())
inputTaskConteiner.addEventListener('change', () => handleInputChange())
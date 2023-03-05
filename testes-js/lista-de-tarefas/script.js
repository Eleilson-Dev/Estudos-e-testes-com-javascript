const inputElement = document.querySelector('.new-task-input');
const addTaskButtom = document.querySelector('.new-task-buttom');
const taskConteiner = document.querySelector('.task-conteiner')

const validateInput = () => inputElement.value.trim().length > 0;

const handleaddTask = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.add('error');
    }

    const taskItemConteiner = document.createElement('div');
    taskItemConteiner.classList.add('task-item')

    const taskContente = document.createElement('p');
    taskContente.innerHTML = inputElement.value;

    const deleteItem = document.createElement('i')
    deleteItem.classList.add('fa')
    deleteItem.classList.add('fa-trash-o')

    deleteItem.addEventListener('click', () => handleDeleteClick())

    taskItemConteiner.appendChild(taskContente)
    taskItemConteiner.appendChild(deleteItem)
    taskConteiner.appendChild(taskItemConteiner)

    inputElement.value = ""


    const handleDeleteClick = () => {
        taskItemConteiner.remove()

    }
};

const handleInputChange = () => {
    const inputIsValid = validateInput();
    if (inputIsValid) {
        return inputElement.classList.remove('error');
    }
}

addTaskButtom.addEventListener('click', () => handleaddTask());

inputElement.addEventListener('change', () => handleInputChange());
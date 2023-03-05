const conteiner = document.querySelector('.lampada')
const onoff = document.querySelector('#onoff')

const AlternarConteiner = () => {
    conteiner.classList.toggle('acesa')
}

onoff.addEventListener('click', () => AlternarConteiner())
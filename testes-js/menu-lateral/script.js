const ionIcon = document.querySelector('.ion-icon');
const conteinerLeft = document.querySelector('.conteiner-left');

ionIcon.addEventListener('click', () => {
    conteinerLeft.classList.toggle('active')
})
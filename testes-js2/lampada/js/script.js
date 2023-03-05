const activeMode = document.querySelector('#lampada-status');
const img = document.querySelector('img');
const body = document.querySelector('body');

window.addEventListener('load', () => {
    setTimeout(() => {
        body.style.display = 'flex';
        loadActiveMode();
    }, 200)
})

const toggleActiveMode = () => {
    body.classList.toggle('active');

    localStorage.removeItem('active');
    img.setAttribute('src', 'imgs/acesa.jpg');

    if(body.classList.contains('active')){
        img.setAttribute('src', 'imgs/apagada.jpg');
        localStorage.setItem('active', 1);
    }
};

const loadActiveMode = () => {
    const actived = localStorage.getItem('active');
    if(actived) {
        toggleActiveMode();
    }
};

activeMode.addEventListener('change', () => {
    toggleActiveMode();
});
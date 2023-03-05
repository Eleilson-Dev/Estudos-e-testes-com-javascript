const ponteiroHora = document.querySelector('.hora');
const ponteiroMinuto = document.querySelector('.minuto');
const ponteiroSegundo = document.querySelector('.segundo');
const relogio = document.querySelector('.relogio');

const deg = 6;



const horas = () => {
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const hr = hora < 10 ? `0${hora}` : hora;
    const mn = minutos < 10 ? `0${minutos}` : minutos;
    const ss = segundos < 10 ? `0${segundos}` : segundos;
    relogio.innerHTML = `<p>${hr}:${mn}:${ss}</p>`
}
setInterval(() => {
    const data = new Date();
    const hr = data.getHours() * 30;
    const mn = data.getMinutes() * deg;
    const ss = data.getSeconds() * deg;

    ponteiroHora.style.transform = `rotate(${(hr)+(mn/12)}deg)`
    ponteiroMinuto.style.transform = `rotate(${mn}deg)`
    ponteiroSegundo.style.transform = `rotate(${ss}deg)`
})
setInterval(() => {
    horas()
})
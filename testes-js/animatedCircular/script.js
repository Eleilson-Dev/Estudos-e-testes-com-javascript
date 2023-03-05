const circleProgres = document.querySelector('.circleProgres1');
const numberPercent1 = document.querySelector('.number-percent1');
const addNumber = document.querySelector('#addNumber');
const bnt1 = document.querySelector('#bnt');

const percent1 = () => {
    let valor = 0;
    if (valor < addNumber.value) {
        valor = addNumber.value;
        const number = valor;
        circleProgres.style.strokeDashoffset = 0 - (440 * number) / 100;

        let counter = 0;

        const timer = setInterval(() => {
            counter++;
            if (counter == number) {
                clearInterval(timer);
            }
            numberPercent1.innerHTML = `${counter} <span>%</span>`;
        }, 25);
    }
};

bnt1.addEventListener('click', () => percent1());

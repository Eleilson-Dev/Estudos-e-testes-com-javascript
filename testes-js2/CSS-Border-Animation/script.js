const numberPage = document.querySelector('h1');

const time = () => {
    const number = 100;
    let counter = 0;
    const timer = setInterval(() => {
        counter++;
        if (counter == number) {
            clearInterval(timer);
            counter = 0;
        }
        numberPage.innerHTML = counter;
    }, 1000);
};
function inicio() {
    time();
}

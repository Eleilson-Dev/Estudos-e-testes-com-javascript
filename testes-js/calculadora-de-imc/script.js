const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const bnt1 = document.querySelector('#bnt-1');
const bnt2 = document.querySelector('#bnt-2');
const statu = document.querySelector('.status');
const situacao = document.querySelector('.situação');

const alturaValue = () => altura.value;
const pesoValue = () => peso.value;

const imcCalc = () => {
    return pesoValue() / (alturaValue() * alturaValue());
};

const limpar = () => {
    altura.value = '';
    peso.value = '';
    statu.innerHTML = '';
    situacao.innerHTML = '';
    altura.focus();
};

const imcCalculado = () => {
    const imc = imcCalc();
    if (imc < 18.5){
        statu.innerHTML = `Abaixo do peso`;
        situacao.innerHTML = `Seu indice de massa corporal é ${imc.toFixed(2)}`;
    };
    if (imc >= 18.5){
        statu.innerHTML = `Peso normal`;
        situacao.innerHTML = `Seu indice de massa corporal é ${imc.toFixed(2)}`;
    };
    if (imc >= 18.5 && imc < 25){
        statu.innerHTML = `Peso normal`;
        situacao.innerHTML = `Seu indice de massa corporal é ${imc.toFixed(2)}`;
    };
    if (imc >= 25 && imc < 29.9){
        statu.innerHTML = `Acima do peso`;
        situacao.innerHTML = `Seu indice de massa corporal é ${imc.toFixed(2)}`;
    };
    if (imc >= 30 && imc < 34.9){
        statu.innerHTML = `Obesidade I`;
        situacao.innerHTML = `Seu indice de massa corporal é ${imc.toFixed(2)}`;
    };
    if (imc >= 35 && imc < 39.9){
        statu.innerHTML = `Obesidade II`;
        situacao.innerHTML = `Seu indice de massa corporal é ${imc.toFixed(2)}`;
    };
    if (imc >= 40){
        statu.innerHTML = `Obesidade III`;
        situacao.innerHTML = `Seu indice de massa corporal é ${imc.toFixed(2)}`;
    };
};

bnt1.addEventListener('click', () => imcCalculado());
bnt2.addEventListener('click', () => limpar());
    

    

    

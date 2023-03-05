
function CalculadoraDeImc() {

    this.altura = document.querySelector('#altura');
    this.peso = document.querySelector('#peso');
    this.bnt1 = document.querySelector('#bnt-1');
    this.bnt2 = document.querySelector('#bnt-2');
    this.statu = document.querySelector('.status');
    this.situacao = document.querySelector('.situação');
    this.init = () => {
        this.imcCalc();
        this.clear();
    }

    this.imcCalc = () => {
        this.bnt1.addEventListener('click', () => {
            const altura = this.altura.value.trim();
            const peso = this.peso.value.trim();
            if (altura === '' || peso === '') {
                alert('erro')
                return
            }
            const pessoaImc = (peso / (altura * 2)).toFixed(2);
            this.imcCalculado(pessoaImc);
            this.altura.value = '';
            this.peso.value = '';
            this.altura.focus();
            return;
        })
    }

    this.imcCalculado = (IMC) => {
        if (IMC < 18.5){
            this.statu.innerHTML = `Abaixo do peso`;
            this.situacao.innerHTML = `Seu indice de massa corporal é ${IMC}`;
            return
        };
        if (IMC >= 18.5 && IMC < 25){
            this.statu.innerHTML = `Peso normal`;
            this.situacao.innerHTML = `Seu indice de massa corporal é ${IMC}`;
            return
        };
        if (IMC >= 25 && IMC < 29.9){
            this.statu.innerHTML = `Acima do peso`;
            this.situacao.innerHTML = `Seu indice de massa corporal é ${IMC}`;
            return
        };
        if (IMC >= 30 && IMC < 34.9){
            this.statu.innerHTML = `Obesidade I`;
            this.situacao.innerHTML = `Seu indice de massa corporal é ${IMC}`;
            return
        };
        if (IMC >= 35 && IMC < 39.9){
            this.statu.innerHTML = `Obesidade II`;
            this.situacao.innerHTML = `Seu indice de massa corporal é ${IMC}`;
            return
        };
        if (IMC >= 40){
            this.statu.innerHTML = `Obesidade III`;
            this.situacao.innerHTML = `Seu indice de massa corporal é ${IMC}`;
            return
        };
    }
    
    this.clear = () => {
        this.bnt2.addEventListener('click', () => {
            this.altura.value = '';
            this.peso.value = '';
            this.statu.innerHTML = '';
            this.situacao.innerHTML = '';
        })
    }
}

const calculadoraDeImc = new CalculadoraDeImc();
calculadoraDeImc.init();
// seletores de icons para mostrar/esconder a senha
const bntPassword = document.querySelector('.bntPassword')
const bntPasswordConfirm = document.querySelector('.bntPasswordConfirm')

//seletores de nome/label nome e validação
const nome = document.querySelector('#nome')
const labelNome = document.querySelector('#label-nome')
let validNome = false

//seletores de usuario/label usuario e validação
const user = document.querySelector('#Usuario')
const labelUser = document.querySelector('#label-usurio')
let validUsuario = false

//seletores de senha/label senha e validação
const password = document.querySelector('#Senha')
const labelPassword = document.querySelector('#label-senha')
let validSenha = false

//seletores de confirmarsenha/label confirmarsenha e validação
const passwordConfirm = document.querySelector('#confirmeSenha')
const labelPasswordConfirm = document.querySelector('#label-confirmarSenha')
let validConfirmarSenha = false

//essa função verifica se o campo de nome é valido
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 5){
        labelNome.setAttribute('style','color:red')
        labelNome.innerHTML = 'Nome *Insira no minimo 6 caracteres'
        nome.setAttribute('style','border-color: red')
        validNome = false
    } else{
        labelNome.setAttribute('style','color:green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style','border-color: green')
        validNome = true
    }
})

//essa função verifica se o campo de usuario é valido
user.addEventListener('keyup', () => {
    if(user.value.length <= 5){
        labelUser.setAttribute('style','color:red')
        labelUser.innerHTML = 'Usuário *Insira no minimo 6 caracteres'
        user.setAttribute('style','border-color: red')
        validUsuario = false
    } else{
        labelUser.setAttribute('style','color:green')
        labelUser.innerHTML = 'Usuário'
        user.setAttribute('style','border-color: green')
        validUsuario = true
    }
})

//essa função verifica se o campo de senha é valido
password.addEventListener('keyup', () => {
    if(password.value.length <= 7){
        labelPassword.setAttribute('style','color:red')
        labelPassword.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        password.setAttribute('style','border-color: red')
        validSenha = false
    } else{
        labelPassword.setAttribute('style','color:green')
        labelPassword.innerHTML = 'Senha'
        password.setAttribute('style','border-color: green')
        validSenha = true
    }
})

//essa função verifica se o campo de confirmar senha é valido
passwordConfirm.addEventListener('keyup', () => {
    if(passwordConfirm.value != password.value){
        labelPasswordConfirm.setAttribute('style','color:red')
        labelPasswordConfirm.innerHTML = 'As senhas não conferem'
        passwordConfirm.setAttribute('style','border-color: red')
        validConfirmarSenha = false
    } else{
        labelPasswordConfirm.setAttribute('style','color:green')
        labelPasswordConfirm.innerHTML = 'Confirmar Senha'
        passwordConfirm.setAttribute('style','border-color: green')
        validConfirmarSenha = true
    }
})

// seletores de mensagens de sucesso/erro
const msgsucess = document.querySelector('.msgsucess')
const msgerror = document.querySelector('.msgerror')

//seletor do bnt cadastrar
const bntCad = document.querySelector('#bntCad')

// essa função é reponsavel por cadastrar o usuario obs: só será ativada caso todos os capos estejam preenchidos corretamente
const cadastrar = () => {
    if(validNome && validUsuario && validSenha && validConfirmarSenha){

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: user.value,
                senhaCad: password.value
            }
        )

        localStorage.setItem('listaUser',JSON.stringify(listaUser))

        msgsucess.innerHTML = '<h3>Cadastrando usuario...</h3>'
        msgsucess.setAttribute('style','display: block')
        msgerror.setAttribute('style','display: none')

        setTimeout( () =>{
            window.location.href = "http://127.0.0.1:5500/testes-js2/cadlogin/login/login.html"
        }, 3000)

    } else {
        msgerror.innerHTML = '<h3>Preencha todos os campos corretamente</h3>'
        msgerror.setAttribute('style','display: block')
        msgsucess.setAttribute('style','display: none')
    }
}

//essa função é responsavel por mostrar/esconder a senha
const passwordinputType = () => {
    const password = document.querySelector('#Senha')

    const passwordTypeispassword = password.type == "password"
    if(passwordTypeispassword){
        password.setAttribute("type", "text")
        bntPassword.setAttribute("name", "eye-off-outline")
    } else {
        password.setAttribute("type", "password")
        bntPassword.setAttribute("name", "eye-outline")
    }
}
const passwordinputConfirmType = () => {
    const passwordConfirme = document.querySelector('#confirmeSenha')

    const passwordTypeConfirm = passwordConfirme.type == "password"
    if(passwordTypeConfirm){
        passwordConfirme.setAttribute("type", "text")
        bntPasswordConfirm.setAttribute("name", "eye-off-outline")
    } else {
        passwordConfirme.setAttribute("type", "password")
        bntPasswordConfirm.setAttribute("name", "eye-outline")
    }
}

bntPassword.addEventListener('click', () => passwordinputType())
bntPasswordConfirm.addEventListener('click', () => passwordinputConfirmType())
bntCad.addEventListener('click', () => cadastrar())

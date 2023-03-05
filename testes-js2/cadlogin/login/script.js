// seletores de usuario / label-usuario
const user = document.querySelector('#Usuario')
const labelSser = document.querySelector('#label-user')
// seletores de senha / label-senha
const password = document.querySelector('#Senha')
const labelSenha = document.querySelector('#label-senha')

const bntPassword = document.querySelector('.bntPassword')

const bntEnter = document.querySelector('.bntEnter')

const passwordinputType = () => {
    const passwordTypeispassword = password.type == "password"
    if(passwordTypeispassword){
        showPassword()
    } else {
        hidePassword()
    }
}

const showPassword = () => {
    password.setAttribute("type", "text")
    bntPassword.setAttribute("name", "eye-off-outline")
    
}
const hidePassword = () => {
    password.setAttribute("type", "password")
    bntPassword.setAttribute("name", "eye-outline")
}

const enter = () => {
    const msgError = document.querySelector('.msgerror')
    let listaUser = []

    let userValid = {
        nome: "#",
        user: "#",
        senha: "#"
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach(item => {
        if(user.value == item.userCad && password.value == item.senhaCad){

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });

    const usuarioValido = user.value == userValid.user
    const SenhaValido = password.value == userValid.senha

    if(usuarioValido && SenhaValido){
        msgError.setAttribute('style','display:none')
        window.location.href = 'http://127.0.0.1:5500/testes-js2/tela/index.html'
        
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        msgError.setAttribute('style','display:block')
        msgError.innerHTML = 'Usuario ou senha invalido'
        user.focus()
    }
}

bntPassword.addEventListener('click', () => passwordinputType())
bntEnter.addEventListener('click', () => enter())
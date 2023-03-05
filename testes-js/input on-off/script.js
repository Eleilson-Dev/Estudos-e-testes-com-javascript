const passwordinput = document.getElementById('password')
const eyeoutline = document.getElementById('eye-outline')

function eyeclic() {
    let passwordTypeispassword = passwordinput.type == "password"

    if (passwordTypeispassword) {
        //ação
        showPassword()
    } else {
        //ação
        hidePassword()
    }
}

function showPassword() {
    passwordinput.setAttribute("type", "text")
    eyeoutline.setAttribute("src", "svg/eye-off.svg")
}

function hidePassword() {
    passwordinput.setAttribute("type", "password")
    eyeoutline.setAttribute("src", "svg/eye-outline.svg")
}
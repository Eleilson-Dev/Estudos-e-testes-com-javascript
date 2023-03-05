let num = document.querySelector('#Inicio')
let lista = document.querySelector('#flista')
let res = document.querySelector('.res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ""
    num.focus()
}

function Finalizar() {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
        soma += valores[pos]
        media = soma / total
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    res.innerHTML = `<p>O total de números adicionados foi ${total}</p>`
    res.innerHTML += `<p>A soma dos números é igual a ${soma}</p>`
    res.innerHTML += `<p>A a mdedia dos valores é ${media}</p>`
    res.innerHTML += `<p>O maior valor encontrado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor encontrado foi ${menor}</p>`



}
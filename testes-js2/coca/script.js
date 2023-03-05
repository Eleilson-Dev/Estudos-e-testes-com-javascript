const coca = document.querySelector('.coca')
const img = document.querySelector('#img')
const lata = document.querySelector('.lata')

const activar = () =>{
    coca.classList.add('active2')
    img.classList.add('ative')
    lata.classList.add('lataShow')
}

const desctive = () => {
    img.classList.remove('ative')
    coca.classList.remove('active2')
    lata.classList.remove('lataShow')
}

coca.addEventListener('mouseenter', () => activar())
coca.addEventListener('mouseleave', () => desctive())

const listaDeEmails = [
    'maxta.gamer@gmail.com',
    'julio.gamer@gmail.com',
    'vanessa.gamer@gmail.com',
    'ana.gamer@gmail.com',
    'jose.gamer@gmail.com',
    'rafael.gamer@gmail.com'
]

const enviarEmail = (email) => {
    console.log(`email enviado para ${email} foi enviado com sucesso`)
}

const newList = () => {
    listaDeEmails.forEach((item, posição, array) => {
    enviarEmail(item)
    console.log(`sua posição é ${posição}`)
    console.log(`a quantidade de pessoas no processo celetivo é: ${array}`)
})
}

const numbers = [52,54,35,46,78,150]

const newArrayNumbers = numbers.filter((item) => item > 35)

console.log(newArrayNumbers)

const firstTravelerCities = [
    'sidnei',
    'berlin',
    'lisboa',
    'sofia',
    'praga',
    'bali',
    'florianopolis',
]

const secondTravelerCities = ['sidnei','lisboa','xang mai','new york','bali']

const commomCities = firstTravelerCities.filter((citye) => secondTravelerCities.includes(citye))

console.table(commomCities)
   

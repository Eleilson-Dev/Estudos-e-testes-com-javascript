const resultados = document.querySelector('.resultados');
const resultadoEsperado = document.querySelector('.resultado-esperado');
const pesquisar = document.querySelector('.pesquisar');

const musicas = [
    {titulo: '777-666', img: 'img1.jpg' ,artista: 'Matuê'},
    {titulo: 'Antes', img: 'img2.jpeg' ,artista: 'Matuê'},
    {titulo: 'Cogulândia', img: 'img3.jpg' ,artista: 'Matuê'},
    {titulo: 'É Sal', img: 'img4.jpg' ,artista: 'Matuê'},
    {titulo: 'Gorilla Roxo', img: 'img5.jpg' ,artista: 'Matuê'},
    {titulo: 'Máquina do Tempo', img: 'img6.webp',artista: 'Matuê'},
    {titulo: 'Vem Chapar', img: 'img7.jpg', artista: 'Matuê'}
];

window.addEventListener('load', () => {
    musicas.forEach(item => {
        const p = document.createElement('p');
        p.innerHTML = item.titulo;
        resultados.appendChild(p);
    });
});

pesquisar.addEventListener('keyup', () => {
    const includeArray = musicas.filter(item => item.titulo.includes(pesquisar.value));
    includeArray.forEach(item => {
        const p = document.createElement('p');
        p.innerHTML = item.titulo;
        resultados.appendChild(p);
        resultadoEsperado.appendChild(p);
        if(pesquisar.value === '') {
            resultadoEsperado.innerHTML = '';
        }
    })
    
})



// const newArray = musicas.map(item => {
//     return {titulo: item.titulo, img: item.img};
// });

// const filterArray = musicas
//     .filter(item => item.img === 'img6.webp');

// const includeArray = musicas.filter(item => item.titulo.includes('C'));
// includeArray.forEach(item => {
//     console.log(item.titulo)
// })
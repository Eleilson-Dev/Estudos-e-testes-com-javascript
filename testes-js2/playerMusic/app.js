const musicas = [
    {titulo: '777-666', img: 'img1.jpg' ,artista: 'Matuê'},
    {titulo: 'Antes', img: 'img2.jpeg' ,artista: 'Matuê'},
    {titulo: 'Cogulândia', img: 'img3.jpg' ,artista: 'Matuê'},
    {titulo: 'É Sal', img: 'img4.jpg' ,artista: 'Matuê'},
    {titulo: 'Gorilla Roxo', img: 'img5.jpg' ,artista: 'Matuê'},
    {titulo: 'Máquina do Tempo', img: 'img6.webp',artista: 'Matuê'},
    {titulo: 'Vem Chapar', img: 'img7.jpg', artista: 'Matuê'}
];

let musicSelected = 0;

let music = document.querySelector('audio');
const img = document.querySelector('.img-name');
const BntPlay = document.querySelector('.bnt-play');
const play = document.querySelector('.fa-circle-play');
const pause = document.querySelector('.fa-circle-pause');
const timeEnd = document.querySelector('.fim');
const back = document.querySelector('.fa-backward-step');
const next = document.querySelector('.fa-forward-step');

const barra = document.querySelector('progress');
const pontoPlay = document.querySelector('.ponto');
const timeCurrent = document.querySelector('.inicio');

const nomeMusic = document.querySelector('.nome-music');
const nomeArtista = document.querySelector('.nome-artista');

window.addEventListener('load', () => {
    selectMusic(musicas, musicSelected);
})

const selectMusic = (musics, selected) => {
    setTimeout(() => {
        nomeMusic.textContent = musics[selected].titulo;
        nomeArtista.textContent = musics[selected].artista;
        timeEnd.textContent = segundosParaMinutos(Math.floor(music.duration))
        music.setAttribute('src', `music/${musics[selected].titulo}.mp3`);
        img.style.backgroundImage = `url(imgs/${musics[selected].img})`;
    }, 50)

};

music.addEventListener('timeupdate', () => {
    updateBarra();
})

const updateBarra = () => {

    let timeMusic = Math.floor((music.currentTime / music.duration) * 100);

    barra.style.width = `${timeMusic}%`;
    pontoPlay.style.left = `${timeMusic}%`;

    let minuto = segundosParaMinutos(Math.floor(music.currentTime));

    timeCurrent.textContent = minuto;
    if(minuto === segundosParaMinutos(Math.floor(music.duration))) {
        alteraPlay();
    }
}

const segundosParaMinutos = (segundos) => {
    let minuto = Math.floor(segundos / 60);
    let segundo = Math.floor(segundos % 60);

    if (segundo < 10) {
        segundo = '0' + segundo
    }

    return `${minuto}:${segundo}`;
}

const alteraPlay = () => {
    if(play.classList.contains('off')) {
        play.classList.remove('off')
    } else {
        play.classList.add('off')
        playMusic();
    }

    if(pause.classList.contains('off')) {
        pause.classList.remove('off')
    } else {
        pause.classList.add('off')
        pauseMusic();
    }
}

const playMusic = () => {
    music.play()
}

const pauseMusic = () => {
    music.pause()
}

back.addEventListener('click', () => {
    barra.style.width = `0%`;
    pontoPlay.style.left = `0%`;
    if(musicSelected > 0) {
        musicSelected--;
        selectMusic(musicas, musicSelected);
        return;
    }

});

BntPlay.addEventListener('click', () => {
    alteraPlay();
});

next.addEventListener('click', () => {
    barra.style.width = `0%`;
    pontoPlay.style.left = `0%`;
    if(musicSelected < musicas.length) {
        musicSelected++;
        selectMusic(musicas, musicSelected);
        return;
    }
});

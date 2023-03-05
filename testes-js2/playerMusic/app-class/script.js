const musicas = [
    {titulo: '777-666.mp3', artista: 'Matuê'},
    {titulo: 'Antes.mp3', artista: 'Matuê'},
    {titulo: 'Cogulândia.mp3', artista: 'Matuê'},
    {titulo: 'É Sal.mp3', artista: 'Matuê'},
    {titulo: 'Gorilla Roxo.mp3', artista: 'Matuê'},
    {titulo: 'Máquina do Tempo.mp3', artista: 'Matuê'},
    {titulo: 'Vem Chapar.mp3', artista: 'Matuê'}
];

let musicSelected = 0;
 
class PlayerMusic {
    constructor() {
        this.music = document.querySelector('audio');
        this.bntPlay = document.querySelector('.bnt-play');
        this.play = document.querySelector('.fa-circle-play');
        this.pause = document.querySelector('.fa-circle-pause');
        this.back = document.querySelector('.fa-backward-step');
        this.next = document.querySelector('.fa-forward-step');
        this.barra = document.querySelector('progress');
        this.pontoPlay = document.querySelector('.ponto');
        this.timeCurrent = document.querySelector('.inicio');
        this.timeEnd = document.querySelector('.fim');
    }

    init() {
        this.selectMusic(musicas, 0);
        this.bntBackMusic();
        this.bntForPlay();
        this.bntNextMusic();
    }

    selectMusic(musics, selected) {
        this.nomeMusic = document.querySelector('.nome-music');
        this.nomeArtista = document.querySelector('.nome-artista');
    
        setTimeout(() => {
            this.timeEnd.textContent = this.segundosParaMinutos(Math.floor(this.music.duration));
            this.nomeMusic.textContent = musics[selected].titulo; 
            this.nomeArtista.textContent = musics[selected].artista;
            this.music.setAttribute('src', `music/${musics[selected].titulo}`)
            alteraPlay();
        }, 50);
    }

    updateBarra() {
        this.timeMusic = Math.floor((Number(this.music.currentTime) / this.music.duration) * 100);

        this.barra.style.width = `${this.timeMusic}%`;
        this.pontoPlay.style.left = `${this.timeMusic}%`;

        this.timeCurrent.textContent = this.segundosParaMinutos(this.timeMusic);

        console.log(this.timeMusic)
    }

    segundosParaMinutos(segundos) {
        this.minuto = Math.floor(segundos / 60);
        this.segundo = Math.floor(segundos % 60);
        
        if(this.segundo < 10) {
            this.segundo = `0${this.segundo}`;
        }

        return `${this.minuto}:${this.segundo}`;
    }

    alteraPlayMusic() {
        if(this.play.classList.contains('off')){
            this.play.classList.remove('off');
        } else {
            this.play.classList.add('off');
            this.playMusic();
        }
    }

    alteraPlayPause() {
        if(this.pause.classList.contains('off')){
            this.pause.classList.remove('off');
        } else {
            this.pause.classList.add('off');
            this.pauseMusic();
        }
    }

    playMusic() {
        this.music.play();
    }

    pauseMusic() {
        this.music.pause();
    }

    bntBackMusic() {
        this.back.addEventListener('click', () => {
            if(musicSelected > 0) {
                musicSelected--;
                this.selectMusic(musicas, musicSelected);
                return;
            }
        })
    }

    bntForPlay() {
        this.bntPlay.addEventListener('click', () => {
            this.alteraPlayMusic();
            this.alteraPlayPause();
            this.music.addEventListener('timeupdate', () => {
                this.updateBarra()
            });
        })
    }

    bntNextMusic() {
        this.next.addEventListener('click', () => {
            if(musicSelected < musicas.length) {
                musicSelected++;
                this.selectMusic(musicas, musicSelected);
                return;
            }
            
        })
    }
}

const playerMusic = new PlayerMusic();
playerMusic.init()
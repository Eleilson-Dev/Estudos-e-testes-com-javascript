const form = document.querySelector('#form');
const searchInput = document.querySelector('#search');
const songsConteiner = document.querySelector('#songs-container');
const preveAndNextConteiner = document.querySelector('#prev-and-next-container');

const apiURL = `https://api.lyrics.ovh`;

const getMoreSongs = async url => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await response.json();
    console.log(data)
    insertSongsInToPage(data)
}

const insertSongsInToPage = (songsInfo) => {

    songsConteiner.innerHTML = songsInfo.data.map(song => `
        <li class="song">
            <span class="song-artist">
                <strong>${song.artist.name}</strong> - ${song.title}
            </span>
            <button class="btn" data-artist="${song.artist.name}" data-song-title="${song.title}" >ver letra</buttom>
        </li>
    `).join('');

    if(songsInfo.prev || songsInfo.next) {
        preveAndNextConteiner.innerHTML = `
            ${songsInfo.prev ? `<button class="btn" onClick="getMoreSongs('${songsInfo.prev}')" >Anteriores</button>` 
            : ''}
            ${songsInfo.next ? `<button class="btn" onClick="getMoreSongs('${songsInfo.next}')" >Próximas</button>` 
            : ''}
               
        `
        return
    };
    preveAndNextConteiner.innerHTML = '';
}

const fetchSongs = async (term) => {
    try {
        const response = await fetch(`${apiURL}/suggest/${term}`);
        const data = await response.json();
        insertSongsInToPage(data)
    } catch(error) {
        console.warn(error);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = searchInput.value.trim();
    if(!searchTerm) {
        songsConteiner.innerHTML = `<li class="warning-message">Por favor, digite um termo valido</li>`;
        return
    }
    searchInput.value = '';

    fetchSongs(searchTerm)
})

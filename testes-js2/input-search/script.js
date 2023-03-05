const searchBox = document.querySelector('.searchBox');
const search = document.querySelector('.search');
const close = document.querySelector('.close');

search.addEventListener('click', () => {
    searchBox.classList.add('active');
});
close.addEventListener('click', () => {
    searchBox.classList.remove('active');
});

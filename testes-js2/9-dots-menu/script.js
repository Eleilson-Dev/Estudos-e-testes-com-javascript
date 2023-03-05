const navigation = document.querySelector('.navigation');

const active = () => {
    navigation.classList.toggle('active');
};

navigation.addEventListener('click', () => active());

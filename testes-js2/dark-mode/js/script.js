class DarkAndLightTheme {
    constructor() {
        this.changeThemeBtn = document.querySelector('#change-theme');
        this.body = document.querySelector('body');
    }

    init() {
        this.changeTheme();
        this.loadTheme();
    }

    loadTheme() {
        const darkMode = localStorage.getItem('dark');
        if(darkMode) {
            this.toggleDarkMode();
        }
    }
    
    changeTheme() {
        this.changeThemeBtn.addEventListener('change', () => {
            this.toggleDarkMode()
        })
    }

    toggleDarkMode() {
        this.body.classList.toggle('dark');

        localStorage.removeItem('dark');

        if(this.body.classList.contains('dark')) {
            localStorage.setItem('dark', 1);
        }
    }
}

const darkAndLightTheme = new DarkAndLightTheme();
darkAndLightTheme.init();
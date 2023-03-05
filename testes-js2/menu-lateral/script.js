const allLi = document.querySelectorAll('li');
const dotPai = document.querySelector('.dot-Pai');
const dotcard2 = document.querySelector('.dot-conteiner-two');

allLi.forEach((li, index) => {
    li.addEventListener('mouseenter', () => {
        switch(index) {
            case 0 :
                dotPai.style.transform = `translateX(0px)`;
                dotcard2.innerHTML = `
                <p>
                    <strong style="color: rgb(0, 255, 102);">Whatsapp</strong>
                </p>`;
            break   
            case 1 :
                dotPai.style.transform = `translateX(100px)`;
                dotcard2.innerHTML = `
                <p>
                    <strong style="color: rgb(255, 0, 128);">Instagram</strong>
                </p>`;
            break   
            case 2 :
                dotPai.style.transform = `translateX(200px)`;
                dotcard2.innerHTML = `
                <p>
                    <strong 
                        style="
                            color: black; 
                            text-shadow:  1px 1px 0px #F7004E, -1px -1px 0px  #00EAE3;
                        ">
                        TikTok
                    </strong>
                </p>`;
            break   
            case 3 :
                dotPai.style.transform = `translateX(300px)`;
                dotcard2.innerHTML = `
                
                <p>
                    <strong style="color:  #00acee;">Twitter</strong>
                </p>`;
            break    
        }  
    })
})
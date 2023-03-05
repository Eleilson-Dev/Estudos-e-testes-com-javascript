const text = document.querySelector('#text')
const fds = document.querySelector('#fds')

function myfunk(){
   if(text.value == ""){
      fds.classList.add('mostra')
   } else {
      fds.classList.remove('mostra')
      alert('ok')
   }
}
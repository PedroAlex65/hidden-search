
const seach = document.querySelector('.search')
const input = document.querySelector('.input')
const bnt = document.querySelector('.bnt')


bnt.addEventListener('click', ()=> {
    seach.classList.toggle('active')
    input.focus()
})


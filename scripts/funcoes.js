let open = document.querySelector('.open')
let closed = document.querySelector('.closed')
let menu = document.querySelectorAll('.menu')

open.addEventListener('click', () => {
    open.style.display = 'none'
    closed.style.display = 'block';
    menu.forEach((e) => {
        e.style.display = 'block'
    })
})

closed.addEventListener('click', () => {
    open.style.display = 'block'
    closed.style.display = 'none';
    menu.forEach((e) => {
        e.style.display = 'none'
    })
})
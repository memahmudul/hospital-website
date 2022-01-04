const menu = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

window.addEventListener('scroll',function(){
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
})
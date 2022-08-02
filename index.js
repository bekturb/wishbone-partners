

const burgerMenu = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('close')
    nav.classList.toggle('active')
})

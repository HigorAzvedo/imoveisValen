/* JavaScript para o header */

const menu = document.querySelector('.burguer')
const listItem = document.querySelector('.new-list-item')

menu.addEventListener('click', showMenu)


function showMenu() {
    if (listItem.style.display == 'none') {
        listItem.style.display = 'block'
    } else {
        listItem.style.display = 'none'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 850) {
        listItem.style.display = 'block'
    } else {
        listItem.style.display = 'none'
    }
}



/* JavaScript para mostrar o conteudo atraves do header */

let home = document.querySelector('#new-nav-bar-home')
let sobre = document.querySelector('#nav-bar-header')
let areaDoCliente = document.querySelector('#nav-bar-form')
home.addEventListener('click', showMenu )
sobre.addEventListener('click' , showContent)
areaDoCliente.addEventListener('click', showForm)


const newSobre = document.querySelector('#new-nav-bar-header')
const newAreaDoCliente = document.querySelector('#new-nav-bar-form')
newSobre.addEventListener('click' , showContent)
newAreaDoCliente.addEventListener('click', showForm)



/* JavaScript para mostrar o conteudo */

const openContent = document.querySelector(".abrir-conteudo")
const show = document.querySelector(".mostrar")


openContent.addEventListener('click', showContent)

function showContent() {
     if (show.style.display == 'none') {
        show.style.display = 'block'
    } else {
        show.style.display = 'none'
    }

}

const openEmphasis = document.querySelector(".abrir-destaque")
const emphasis = document.querySelector(".mostrar-destaque")

openEmphasis.addEventListener('click', showEmphasis)

function showEmphasis() {
    if (emphasis.style.display == 'none') {
        emphasis.style.display = 'block'
    } else {
        emphasis.style.display = 'none'
    }
}

const form = document.querySelector('.formulario')

function showForm() {
    if (form.style.display == 'none') {
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
    }
}


/* Mudar a foto */
function mudarFoto() {
    let foto = document.querySelector("#mudar-foto")

    setTimeout(() => {
        foto.src = "img/casa4.jpg"
    }, 1000)

}

function voltarFoto() {
    let foto = document.querySelector("#mudar-foto")

    setTimeout(() => {
        foto.src = "img/casa1.jpg"
    }, 1000)

}

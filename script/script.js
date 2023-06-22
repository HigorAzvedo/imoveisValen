/* JavaScript para o header */

const menu = document.querySelector('.burguer')
menu.addEventListener('click', showMenu)


function showMenu() {
    if (newitens.style.display == 'block') {
        newitens.style.display = 'none'
    } else {
        newitens.style.display = 'block'
    }
}

// function mudouTamanho() {
//     if (window.innerWidth >= 850) {
//         listItem.style.display = 'block'
//     } else {
//         listItem.style.display = 'none'
//     }
// }


/* JavaScript para mostrar o conteudo */

const openContent = document.querySelector(".abrir-conteudo")
openContent.addEventListener('click', showContent)

function showContent() {
    if (show.style.display == 'block') {
        show.style.display = 'none'
    } else {
        show.style.display = 'block'
    }
}

const openEmphasis = document.querySelector(".abrir-destaque")
openEmphasis.addEventListener('click', showEmphasis)

function showEmphasis() {
    if (emphasis.style.display == 'block') {
        emphasis.style.display = 'none'
    } else {
        emphasis.style.display = 'block'
    }
}

function showForm() {
    if (forms.style.display == 'block') {
        forms.style.display = 'none'
    } else {
        forms.style.display = 'block'
    }
}


/* JavaScript para mostrar o conteudo atraves do header */

let home = document.querySelector('#new-nav-bar-home')
let sobre = document.querySelector('#nav-bar-header')
let areaDoCliente = document.querySelector('#nav-bar-form')

home.addEventListener('click', showMenu)
sobre.addEventListener('click', showContent)
areaDoCliente.addEventListener('click', showForm)

const newSobre = document.querySelector('#new-nav-bar-header')
const newAreaDoCliente = document.querySelector('#new-nav-bar-form')
newSobre.addEventListener('click', showContent)
newAreaDoCliente.addEventListener('click', showForm)

/* Alterar fotos na tela de celular */





let imgs = document.querySelectorAll('.trocar img')
console.log(imgs)
// let img = document.querySelector('.selected')
let currentImageIndex = 0
let max = imgs.length

function mudar(){
    setInterval(()=> {
        imgs[currentImageIndex].classList.remove('selected')
        currentImageIndex++

        if(currentImageIndex >= max){
            currentImageIndex = 0
        }

        imgs[currentImageIndex].classList.add('selected')
    }, 4000)
}

mudar()












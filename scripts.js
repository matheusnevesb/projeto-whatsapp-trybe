let mais = document.querySelector('#mais')
let acessibilidade = document.querySelector('#acessibilidade')
let voltar = document.querySelector('#voltar')


mais.onclick = (e) => {
    let lista = document.getElementById("list");
    lista.classList.toggle('esconder')
}


acessibilidade.onclick = (e) => {
    header = e.target.parentElement.parentElement.parentElement.parentElement
    header.classList.add('esconder')
    corpo = header.nextElementSibling
    corpo.classList.remove('esconder')
    console.log(header.nextElementSibling)

}

voltar.onclick = (e) => {
    header = e.target.parentElement.offsetParent.children[0]
    header.classList.remove('esconder')
    corpo.classList.add('esconder')
    lista.classList.add('esconder')

}
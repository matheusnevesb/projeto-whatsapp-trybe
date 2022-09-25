let mais = document.querySelector('#mais')



mais.onclick = (e) => {
    lista = e.target.parentElement.nextElementSibling
    aparece = lista.classList.contains('esconder')
    if (!aparece){
        lista.classList.add('esconder')
    }else{
        lista.classList.remove('esconder')
    }
}
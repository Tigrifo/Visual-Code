//manipulando elemento "pai"
let pai = document.querySelector('.pai')

//mudar o texto do primeiro filho 
pai.children[0].innerHTML = "Primero filho alterado"
//mudar o texto do segundo filho
pai.children[1].innerHTML = "Segundo filho alterado"

pai.lastElementChild.innerHTML= "Terceiro filho alterado"

//criando um paragrafo o js

//let paragrafo = document.createElement('p') 
//paragrafo.innerHTML = "Isso é um paragrafo"


//anexar o filho no body do html
//document.body.appendChild(paragrafo)

//Cria paragrafo
let p = document.createElement('p')
p.innerText = "Este paragrafo foi inserido na linha 2"

//Selecione a div com id "linha2"
let linha2 = document.getElementById('linha2')

//Adiciona o paragrado como filho dessa div
linha2.prepend(p)

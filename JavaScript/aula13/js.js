const contador = document.querySelector("#contador")

const mais =document.querySelector("#mais")
const menos = document.querySelector("#menos")
const resetar = document.querySelector("#resetar")
let valor = 0

function aumentar(){
    valor++
    contador.innerText = valor
}
function diminuir(){
    valor--
    contador.innerText = valor
}
function reset(){
    contador.innerText = 0
}
function mais100(){
    valor += 100
    contador.innerText = valor
}
function menos100(){
    valor -= 100
    contador.innerText = valor
}
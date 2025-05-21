function funcao() {
 
    let nome = (document.querySelector('#nome').value)
 
    let paragrafo = document.createElement('p');
    paragrafo.innerText = nome;
 
    document.querySelector("#nomes").appendChild(paragrafo);
 
 
}
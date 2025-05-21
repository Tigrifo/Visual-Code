function verificarPalavra(){
    const palavra = document.getElementById("palavra").value.toLowerCase()
    const palavraCorreta = "pescaria"

    if (palavra == palavraCorreta){
        window.location.href = "acerto.html"
    } else {
        window.location.href = "erro.html"
        
    }
}
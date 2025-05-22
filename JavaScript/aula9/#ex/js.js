function vemFuncao(){
    const nota1 = Number(document.getElementById("n1").value)
    const nota2 = Number(document.getElementById("n2").value)
    const nota3 = Number(document.getElementById("n3").value)

    const notatotal = (nota1 + nota2 + nota3) / 3;

    if (notatotal >= 7){
        
        document.getElementById("notatotal").innerHTML = `Média :${notatotal} <br> Status: Aprovado`
    }else{
        document.getElementById("notatotal").innerHTML = `Média :${notatotal} <br> Status: Reprovado`
    }

}
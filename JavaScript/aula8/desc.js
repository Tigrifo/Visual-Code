function desconto(){
    const preco = Number(document.getElementById("preco").value);
    const desc = Number(document.getElementById("desc").value);
    const resultado = document.getElementById("valorcomDesconto");
    
    const valorDesconto = preco * (desc / 100);
    const precoComDesconto = preco - valorDesconto;
    
    document.getElementById("valorDesconto").innerHTML = `Valor do desconto: R$ ${valorDesconto.toFixed(2)}`;
 
    document.getElementById("resultado").innerHTML = `Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`;
}
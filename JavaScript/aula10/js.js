function calculadora(){
    const nome = document.getElementById("nome").value
    const salario = Number(document.getElementById("salario").value)
    const vendas = Number(document.getElementById("vendas").value)
    const comisao = Number(document.getElementById("comisao").value)

    const comisso = vendas * (comisao / 100)
    const bruto = comisso + salario
    const desconto = bruto * 0.08
    const liquido = bruto - desconto
    
    
    
    
    
    document.getElementById("resultado").innerHTML = `Funcionário: ${nome} <br> 
    Salário Base: R$  ${salario.toFixed(2)} 
    <br> Comissão: R$ ${comisso.toFixed(2)} 
    <br> Salário Bruto: R$ ${bruto.toFixed(2)}
    <br> Desconto INSS (8%): R$ ${desconto.toFixed(2)}
    <br> <strong> Salário Líquido: R$ ${liquido.toFixed(2)}</strong>
    `
    resultado.style.backgroundColor = "#ace094"
    resultado.style.padding = "5px"
    resultado.style.paddingRight = "150px"
}
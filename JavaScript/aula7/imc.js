function imc() {
    const nome = document.querySelector('#nome').value;
    const altura = parseFloat(document.querySelector('#altura').value);
    const peso = parseFloat(document.querySelector('#peso').value);
    const resultado = document.querySelector('#result');

    const imcValue = (peso / (altura * altura)).toFixed(2);
    resultado.textContent = `${nome}, seu IMC é ${imcValue}`;

    if (nome !== '' && altura !== '' && peso !== ''){
        let valorIMC = (peso / (altura * altura))

        if (valorIMC < 18.5) {
            tipoIMC = 'abaixo do peso'
        }else if(valorIMC < 24.9){
            tipoIMC = 'peso ideal'
        }else if(valorIMC < 29.9){
            tipoIMC = 'com excesso de peso'
        }else if(valorIMC < 34.9){
            tipoIMC = 'obesidade classe 1'
        }else if(valorIMC < 39.9){
            tipoIMC = 'obesidade classe 2'
        }else {
            tipoIMC = 'obesidade classe 3'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC.toFixed(2)} e você está ${tipoIMC}`
    } else {
        resultado.textContent = "Preencha todos os campos"
    }
}

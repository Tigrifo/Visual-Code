function botaom(){
    let nome = (document.querySelector('#nome').value);
let idade = (document.querySelector('#idade').value);
let endereco = (document.querySelector('#endereco').value);

let frase = ('Olá ' +nome+ '! Você tem '+idade+ ' anos e mora em '+endereco+'.' ) ;

(document.querySelector('#resultado').innerHTML) = frase

}

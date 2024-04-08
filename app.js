let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

    function mensagemInicial(){
        exibirTextonaTela('h1','Jogo do número secreto');
        exibirTextonaTela('p','Escolha um entre 1 e 10')
    }

    mensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto){
        exibirTextonaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1  ? 'tentativas': 'tentativa';
        let mensagemTentativa = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextonaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
     
}
    else{
        
        if(chute > numeroSecreto ) {
            exibirTextonaTela('p', 'O número secreto e menor!');
            }
        else{
            exibirTextonaTela('p', 'O número secreto e maior!')
        }

        tentativas++;
        limparCampo();
        

}
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}







function gerarNumeroAleatorio (){
   return parseInt(Math.random() * 10 + 1);

}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}


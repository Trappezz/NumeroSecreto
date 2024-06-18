alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
let chute;
//console.log(numeroSecreto);
let tentativas = 1;

//Enquanto "chute" não for igual ao "numeroSecreto"
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }

}

let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
alert(`É isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`);

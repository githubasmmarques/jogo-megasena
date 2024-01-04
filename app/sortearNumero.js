const menorValor = 1
const maiorValor = 60
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Calculando chances para = ', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

const elementoMensagem = document.getElementById('mensagem');
elementoMensagem.hidden = true;
const elementoFaleNome = document.getElementById('faleNome');
const elementoNomeJogador = document.getElementById('nome-jogador')


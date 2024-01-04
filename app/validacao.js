function verificaSeChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido')
        elementoChute.innerHTML += `<div>Não entendi. Você poderia repetir, por favor.</div>`
    }

    if (numeroForMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <table width="100%" border="1">
                <tr> 
                <td width="30%" style="text-align: right;">
                        <img src="ternoquadrado.jpg" alt="Terno Quadradp" width="120" height="60">
                    </td>
                <td width="70%" style="text-align: left; vertical-align: middle;">
                        <br><font FACE="Arial" SIZE="4" color="green">&emsp;<b>Parabéns ${elementoNomeJogador.textContent}, com esse número, você será o próximo campeão!!</b></font> <br>
                    </td>
                </tr> 
            </table>  

            <font FACE="Arial" SIZE="4" color="green">O número <b style="font-size:24px; font-weight: 600;">${numeroSecreto}</b> tem grande probabilidade de sair na Mega Sena da Virada</font>
            
            <button id="jogar-novamente" class="btn-jogar">Calcular outro número</button>
        `
    } else {
        if (vez == 5) {
            elementoChute.innerHTML += `<br><div>Xiiiiiii ${elementoNomeJogador.textContent}, tá difícil hein!!</div><br>`
        }
        if (vez == 6) {
            elementoChute.innerHTML += `<br><div>Huuuumm ${elementoNomeJogador.textContent}, estou achando você meio devagar!!</div><br>`
        }
        if (vez == 7) {
            elementoChute.innerHTML += `<br><div>Ai ai ai ${elementoNomeJogador.textContent}, te concentra cabra!!</div><br>`
        }
        if (vez == 8) {
            elementoChute.innerHTML += `<br><div>Não acredito ${elementoNomeJogador.textContent}. Você não vai acertar não?</div><br>`
        }
        if (vez == 9) {
            elementoChute.innerHTML += `<br><div>Caraca ${elementoNomeJogador.textContent}, você tá chegando perto. Continue!!</div><br>`
        }
        if (vez == 10) {
            elementoChute.innerHTML += `<br><div>Huuum ${elementoNomeJogador.textContent}, acho que vou desistir de você!!</div><br>`
        }
        if (numero > numeroSecreto) {
            //      <div>Número Secreto é menor que ${numero}</div>
            if (vez % 3 == 0) {
                elementoChute.innerHTML += `<div>${elementoNomeJogador.textContent}, tente outra vez com um número MENOR!!</div><br>`
            }
            elementoChute.innerHTML += `
                <div>As chances são maiores para um Número MENOR 
                    <i class="fa-solid fa-square-arrow-down-right"></i> 
                    <i class="fa-solid fa-arrow-down-right-dots"></i> 
                    <i class="fa-solid fa-down-long"></i>
                </div>
            `
        } else if (numero < numeroSecreto) {
            //      <div>Número Secreto é maior que ${numero}</div>
            if (vez % 3 == 0) {
                elementoChute.innerHTML += `<div>${elementoNomeJogador.textContent}, tente outra vez com um número MAIOR!!</div><br>`
            }
            elementoChute.innerHTML += `
                <div>As chances são maiores para um Número MAIOR 
                    <i class="fa-solid fa-square-arrow-up-right"></i> 
                    <i class="fa-solid fa-arrow-up-right-dots"></i> 
                    <i class="fa-solid fa-up-long"></i>
                </div>
            `
        }
    }
}

function chuteForInvalido(numero) {
    if (chute.toUpperCase() === "GAME OVER" || chute.toUpperCase() === "SAIR" || chute.toUpperCase() === "CHEGA" || chute.toUpperCase() === "TÁ BOM") {
        document.body.innerHTML =
            `
            <h2 class="fonte-vermelho">Game Over!!!</h2>
            <h3 class="fonte-vermelho">Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
    } else {
        return Number.isNaN(numero);
        //elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }
}

function  numeroForMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente' ) {
        window.location.reload();
    }  
})


function verificaNome(chute) {
    console.log('Nome = ' + chute);
    elementoChute.innerHTML += `<div>${chute.toUpperCase()}, essa é a tua grande chance.<br><br>Fale agora mesmo um número, e boa sorte!!</div>`
    if (chute.toUpperCase() == 'MAÍSA') {
        elementoChute.innerHTML += `<div>${chute.toUpperCase()}, dessa vez você vai ganhar!!</div>`
    }
    const elementoNomeJogador = document.getElementById('nome-jogador')
    elementoNomeJogador.innerHTML = chute.toUpperCase()
    elementoFaleNome.hidden = true;
    elementoMensagem.hidden = false;

}
function verificaSeChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (numero == 'Ivan') {
        console.log('MAIZA')
        elementoChute.innerHTML += `<div>Ivan : Essa é a tua chance. Fale agora um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido')
        elementoChute.innerHTML += `<div>Não entendi. Você poderia repetir, por favor.</div>`
    }

    if (numeroForMaiorOuMenorQueValorPermitido(numero)) {
        console.log(`Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}`);
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
                        <br><font FACE="Arial" SIZE="4" color="green">&emsp;<b>Parabéns, com esse número, você será o próximo campeão!!</b></font> <br>
                    </td>
                </tr> 
            </table>  

            <font FACE="Arial" SIZE="4" color="green">O número <b style="font-size:24px; font-weight: 600;">${numeroSecreto}</b> tem grande probabilidade de sair na Mega Sena da Virada</font>
            
            <button id="jogar-novamente" class="btn-jogar">Calcular outro número.</button>
        `
    } else if (numero > numeroSecreto) {
//      <div>Número Secreto é menor que ${numero}</div>
        elementoChute.innerHTML += `
            <div>As chances são maiores para um Número Menor 
                <i class="fa-solid fa-square-arrow-down-right"></i> 
                <i class="fa-solid fa-arrow-down-right-dots"></i> 
                <i class="fa-solid fa-down-long"></i>
            </div>
        `
    } else if (numero < numeroSecreto) {
//      <div>Número Secreto é maior que ${numero}</div>
        elementoChute.innerHTML += `
            <div>As chances são maiores para um Número Maior 
                <i class="fa-solid fa-square-arrow-up-right"></i> 
                <i class="fa-solid fa-arrow-up-right-dots"></i> 
                <i class="fa-solid fa-up-long"></i>
            </div>
        `

    }


}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function  numeroForMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente' ) {
        window.location.reload();
    }  
})
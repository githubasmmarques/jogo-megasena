const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start()

recognition.addEventListener('result', onSpeak)

var vez = 1;
function onSpeak(e) {
    chute = e.results[0][0].transcript;
    console.log(e.results[0][0].transcript);
   // console.log(e.target.lang);
   console.log('VEZ = ' + vez);
   if (vez == 1) {
     verificaNome(chute);
   } else {
       exibeChuteNaTela(chute);
       verificaSeChutePossuiUmValorValido(chute);
   }
   vez = ++vez;
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())      // Quando acabar de ouvir, liga mais uma vez o Reconhecimento de Voz
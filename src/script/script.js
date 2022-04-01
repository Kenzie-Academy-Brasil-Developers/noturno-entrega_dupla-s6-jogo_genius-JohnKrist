//BUTTONS

const btnRed = document.getElementsByClassName('gameButtonRed')[0];
const btnBlue = document.getElementsByClassName('gameButtonBlue')[0];
const btnYellow = document.getElementsByClassName('gameButtonYellow')[0];
const btnGreen = document.getElementsByClassName('gameButtonGreen')[0];
const start = document.getElementsByClassName('btnStart')[0];
const reset = document.getElementsByClassName('btnRetry')[0];


//COLOR DATA:
const colorData = [btnGreen, btnRed, btnYellow, btnBlue]
const colorSquence = ['Green', 'Red', 'Yellow', 'Blue']
/**
 VERDE -> 0
 VERMELHO -> 1
 AMARELO -> 2
 AZUL -> 3
 */



//CONTADORES
let randomSequence = [];
let playerSequence = [];
let score = 0;
let clickedColor = 0;

//USANDO LET POIS FICA MAIS FACIL APAGAR O ARRAY NO RESET, SE USAR CONST VAI PRECISAR DE UMA FUNCAO PARA RESETAR.

//ENVENTOS
start.addEventListener('click', getAleatoryNumber)
start.addEventListener('click', startGame)
reset.addEventListener('click', resetSequence)

btnRed.addEventListener('click', clickRed)
btnRed.addEventListener('click', checkClick)
//btnRed.addEventListener('click', light)

btnBlue.addEventListener('click', clickBlue)
btnBlue.addEventListener('click', checkClick)
//btnBlue.addEventListener('click', light)

btnYellow.addEventListener('click', clickYellow)
btnYellow.addEventListener('click', checkClick)
//btnYellow.addEventListener('click', light)

btnGreen.addEventListener('click', clickGreen)
btnGreen.addEventListener('click', checkClick)
//btnGreen.addEventListener('click', light)
/****************************************************************************************************** */

/**
 * PRECISO DE UMA FUNCAO QUE INICIE O JOGO! -> EVENTO ESCUTADOR NO NO BOTAO START - OK
 * PRECISO DE UMA FUNCAO QUE ACENDA (TROQUE A COR) ALEATORIAMENTE UM DOS BOTOES
 *      PRECISO NUMERAR OS BOTOES PARA GERAR OS COMANDOS... OK
 * PRECISO DE UMA FUNCAO QUE VERIFIQUE SE O JOGODOR RESPONDER CORRETAMENTE - OK
 * PRECISO DE UMA FUNCAO QUE SOME OS PONTOS DO JOGADOR - OK
 * A FUNCA DE ACENDER UMA COR, SERA REPETIDA ATE O JOGADOR ERRAR, SENDO UM LOOPING, REPETINDO TODOS OS EVENTOS ANTERIORES.
 * O BOTAO RESET APAGA A LUZ, APAGA TUDO! - OK
 * 
 */

/*PROBLEMA NUMERO 1: COMO 'ACENDER' A LUZ? */

/**
 * CRIAR A FUNCAO QUE GERA UMA SEQUENCIA ALEATORIA - OK
 * QUANTOS NUMEROS COLOCAREMOS NA SEQUENCIA?
 */

//CRIANDO A SEQUENCIA ALEATORIA
function getAleatoryNumber () {
    let newNumber = parseInt(Math.random() * 4);
        randomSequence.push(newNumber)
        console.log(randomSequence)
}
    


//RESETANDO TUDO!
function resetSequence (event) {
    randomSequence = [];
    playerSequence = [];
    score = 0
    getAleatoryNumber()
}

//FUNCOES QUE CONVERTEM OS CLICKS EM NUMEROS!
function clickRed (event){
    clickedColor = 1;
    playerSequence.push(1)
    //console.log(playerSequence)
}
function clickBlue (event){
    clickedColor = 3;
    playerSequence.push(3)
    //console.log(playerSequence)
}
function clickYellow (event){
    clickedColor = 2;
    playerSequence.push(2)
    //console.log(playerSequence)
}
function clickGreen (event){
    clickedColor = 0;
    playerSequence.push(0)
    //console.log(playerSequence)
}


//FUCAO QUE ACENDE AS LUZES:
function startGame(event){
    let countSequence = 0
    for(i = 0; i <= randomSequence.length; i++){
        let light = colorData[randomSequence[i]]
        let lightColor = colorSquence[randomSequence[i]]
        console.log(light)
        setTimeout(() => {
            console.log(light)
            light.classList.add(`gameButtonLigth${lightColor}`);
        },250);
        setTimeout(() => {
            console.log(light)
            light.classList.remove(`gameButtonLigth${lightColor}`);
        },1400);
    }
    
}

//FUNCAO TESTA O CLICK E O COMPARA COM A SEQUENCIA CERTA!
let countRound = 0


function checkClick (event){
        for(let i = 0; i <= playerSequence.length; i++) {
            if(randomSequence[i] != playerSequence[i]) {
                console.log(`random: ${randomSequence[i]}`)
                console.log(`play: ${playerSequence[i]}`)
            }
        }
        if(randomSequence.length == playerSequence.length) {
            console.log('ok')
            console.log(`play: ${playerSequence}`)
            playerSequence = []
        }
}

    
    
     /*   
    } else {
        //fail.play()
        resetSequence()
        console.log(randomSequence)
        //console.log(playerSequence)
        alert(`A CASA CAIU! VOCE PERDEU!!!!`)
        console.log(score)*/

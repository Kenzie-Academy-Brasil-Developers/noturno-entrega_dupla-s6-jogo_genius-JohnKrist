//BUTTONS

const btnRed = document.getElementsByClassName('gameButtonRed')[0];
const btnBlue = document.getElementsByClassName('gameButtonBlue')[0];
const btnYellow = document.getElementsByClassName('gameButtonYellow')[0];
const btnGreen = document.getElementsByClassName('gameButtonGreen')[0];
const start = document.getElementsByClassName('btnStart')[0];
const reset = document.getElementsByClassName('btnRetry')[0];
const scorePlace = document.getElementsByClassName('scorePlace')[0];
const instruction = document.getElementsByClassName('instruction')[0]

//COLOR DATA:
const colorData = [btnGreen, btnRed, btnYellow, btnBlue]
const colorSquence = ['Green', 'Red', 'Yellow', 'Blue']
/*
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
let countClick = 0;


//ENVENTOS
reset.addEventListener('click', startGame)

start.addEventListener('click', startGame)

btnRed.addEventListener('click', clickRed)

btnBlue.addEventListener('click', clickBlue)

btnYellow.addEventListener('click', clickYellow)

btnGreen.addEventListener('click', clickGreen)

/****************************************************************************************************** */

//CRIANDO A SEQUENCIA ALEATORIA
function getAleatoryNumber () {
    let newNumber = parseInt(Math.random() * 4);
        return newNumber
}

//FUNCOES QUE CONVERTEM OS CLICKS EM NUMEROS!
function clickGreen (event){
    clickedColor = 0;
    playerSequence.push(clickedColor)
    colorLight(clickedColor)
    checkClick()
    console.log(randomSequence)
}
function clickRed (event){
    clickedColor = 1;
    playerSequence.push(clickedColor)
    colorLight(clickedColor)
    checkClick()
    console.log(randomSequence)
}
function clickYellow (event){
    clickedColor = 2;
    playerSequence.push(clickedColor)
    colorLight(clickedColor)
    checkClick()
    console.log(randomSequence)
}
function clickBlue (event){
    clickedColor = 3;
    playerSequence.push(clickedColor)
    colorLight(clickedColor)
    checkClick()
    console.log(randomSequence)
}

//FUNCAO QUE COMECA O JOGO
function startGame(event){ //nao dispara se receber um array...
    randomSequence = [];
    playerSequence = [];
    score = 0
    nextLevel()
}

function nextLevel(event){ //nao dispara se receber um array...
    scorePlace.innerText = `score:${score}`;
    playerSequence = [];
    let newNumber = getAleatoryNumber()
    randomSequence.push(newNumber)
    setTimeout(function () {
        instruction.innerText = 'Vamos começar! Atenção!'
    }, 400);
    setTimeout(function () {
        sequenceLight(newNumber)
    }, 800)
}
//FUNCAO QUE INICIA O PROXIMO NIVEL:

//PISCA O BOTAO
function colorLight(number) {
    const light = colorData[number]
    const lightColor = colorSquence[number]    
    light.classList.add(`gameButtonLigth${lightColor}`);
    setTimeout(function () {
        light.classList.remove(`gameButtonLigth${lightColor}`);
    }, 800);
}

//PISCA A SEQUENCIA!
function sequenceLight(event) {
    let count = 0;
    const sequence = setInterval(function () {
        colorLight(randomSequence[count]);
      count++;
      if (count === randomSequence.length) {
        clearInterval(sequence);
        setTimeout(function (){
            instruction.innerText = 'Sua vez! Repita a sequência!'
        }, 1000)
      }
    }, 1000);
    
}

//FUNCAO TESTA O CLICK E O COMPARA COM A SEQUENCIA CERTA
function checkClick (){
    if (randomSequence[countClick] !== playerSequence[countClick]){
        countClick = 0
        alert(`Você Perdeu! Sua pontuação foi: ${score}`)
        score = 0
        startGame()
    } else if (randomSequence[countClick] === playerSequence[countClick]){
        countClick++
    }
    if(randomSequence.length === playerSequence.length){
        score++
        countClick = 0
        instruction.innerText = 'Muito bem! Proximo nivel...'
        setTimeout(function () {
            nextLevel()
        }, 1000)
    }
}

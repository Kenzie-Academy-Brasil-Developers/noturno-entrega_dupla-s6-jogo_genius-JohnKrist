/*
red.addEventListener('click', clickRed)
blue.addEventListener('click', clickBlue)
yellow.addEventListener('click', clickYellow)
green.addEventListener('click', clickGreen)


function clickRed() {
    sequence_player.push('red')
    console.log(sequence_player)
    checkClick(sequence_player, sequence_Game)
}
function clickBlue() {
    sequence_player.push('blue')
    console.log(sequence_player)
    checkClick(sequence_player, sequence_Game)
}
function clickYellow() {
    sequence_player.push('yellow')
    console.log(sequence_player)
    checkClick(sequence_player, sequence_Game)
}
function clickGreen() {
    sequence_player.push('green')
    console.log(sequence_player)
    checkClick(sequence_Game, sequence_Game)
}
console.log(sequence_player)


function checkClick(a1, a2) {
    let acertou = a1.length === a2.length && a1.every((value, index) => value === a2[index]);

    if (acertou === true) {
        showScore
        resetPlayer()
        getAleatorySequence()
        light()
        
        score = score + 1
    } else {
        setTimeout(() => {
            youLose()
            inputScore.innerHTML = ' YOU LOSE!!!'
        }, 5000)
        //resetSequence()
        //disableButtons()
    }
}



function youLose() {

    setInterval(() => {
        green.classList.add('gameButtonLigthGreen')
        red.classList.add('gameButtonLigthRed')
        yellow.classList.add('gameButtonLigthYellow')
        blue.classList.add('gameButtonLigthBlue')
    }, 440)
    setInterval(() => {
        green.classList.remove('gameButtonLigthGreen')
        red.classList.remove('gameButtonLi1gthRed')
        yellow.classList.remove('gameButtonLigthYellow')
        blue.classList.remove('gameButtonLigthBlue')
    }, 560)

}*/

start.addEventListener('click', () => {
    setTimeout(() => {
        inputScore.classList.add("onGame")
    }, 500)
    setTimeout(() => {
        inputScore.classList.remove("onGame")
    }, 1000)
    gameStart = true
    

})
function gameControl() {

    if (gameStart == true) {
        getAleatorySequence()
        setTimeout(() => {
            light()
        }, 1000)
    }

}




function getAleatorySequence() {


    let newNumber = parseInt(Math.random() * 4 + 1);


    if (newNumber === 1) {
        sequence_Game.push('green')

    } else if (newNumber === 2) {
        sequence_Game.push('red')

    } else if (newNumber === 3) {
        sequence_Game.push('yellow')

    } else if (newNumber === 4) {
        sequence_Game.push('blue')

    }
}
console.log(sequence_Game)

function light() {
    for (let i = 0; i <= sequence_Game.length; i++) {
        if (sequence_Game[i] === 'green') {
            (function (i) {
                setTimeout(() => {
                    setTimeout(() => {
                        green.classList.add('gameButtonLigthGreen')
                    }, 500)
                    setTimeout(() => {
                        green.classList.remove('gameButtonLigthGreen')
                    }, 2500)
                }, 2000 * i);
            })(i);
        } else if (sequence_Game[i] === 'red') {
            (function (i) {
                setTimeout(() => {
                    setTimeout(() => {
                        red.classList.add('gameButtonLigthRed')
                    }, 500)
                    setTimeout(() => {
                        red.classList.remove('gameButtonLigthRed')
                    }, 2000)
                }, 2000 * i);
            })(i);
        } else if (sequence_Game[i] === 'yellow') {
            (function (i) {
                setTimeout(() => {
                    setTimeout(() => {
                        yellow.classList.add('gameButtonLigthYellow')
                    }, 500)
                    setTimeout(() => {
                        yellow.classList.remove('gameButtonLigthYellow')
                    }, 2000)
                }, 2000 * i);
            })(i);
        } else if (sequence_Game[i] === 'blue') {
            (function (i) {
                setTimeout(() => {
                    setTimeout(() => {
                        blue.classList.add('gameButtonLigthBlue')
                    }, 500)
                    setTimeout(() => {
                        blue.classList.remove('gameButtonLigthBlue')
                    }, 2000)
                }, 2000 * i);
            })(i);
        }
    }
}
/*----------------------------------------------------------------*/

function showScore() {
    inputScore.innerHTML = score.toString()

}

/*----------------------------------------------------------------------*/

function resetPlayer() {
    sequence_player = [];

}

/*----------------------------------------------------------------------------*/

function resetGame() {
    sequence_Game = [];
    score = 0
    console.log(sequence_Game)
}
/*----------------------------------------------------------------------------*/
start.addEventListener('click', gameControl)
reset.addEventListener('click', resetGame)

/*buttonAll[0] = green 
  buttonAll[1] = red 
  buttonAll[2] = yellow 
  buttonAll[3] = blue
*/










































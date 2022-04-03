const body = document.getElementById('root')

function createBoard(){
    const gameContainer = document.createElement('div')
    gameContainer.classList.add('gameContainer')
    
    const div1 = document.createElement('div')
    div1.classList.add("gameButtonGreen")

    const div2 = document.createElement('div')
    div2.classList.add("gameButtonRed")

    const div3 = document.createElement('div')
    div3.classList.add("gameButtonYellow")

    const div4 = document.createElement('div')
    div4.classList.add("gameButtonBlue")

   gameContainer.appendChild(div1) 
   gameContainer.appendChild(div2)
   gameContainer.appendChild(div3)
   gameContainer.appendChild(div4)
   body.appendChild(gameContainer)
}
createBoard()


function createPainel(){
    const centerPainel = document.createElement('div')
    centerPainel.classList.add('centerPainel')
    
    const gamePainel = document.createElement('div')
    gamePainel.classList.add('gamePainel')
    
    const btnStart = document.createElement('button')
    btnStart.classList.add('btnStart')
    btnStart.innerText = 'Iniciar'

    const btnRetry = document.createElement('button')
    btnRetry.classList.add('btnRetry')
    btnRetry.innerText = 'Tentar Novamente'

    const inputScore = document.createElement('div')
    inputScore.classList.add('inputScore')
    
    const scoreText = document.createElement('h2')
    scoreText.classList.add('scorePlace')

    const gameLogo = document.createElement('div')
    gameLogo.classList.add('gameLogo')
    gameLogo.innerText = "Genius"
    
    inputScore.appendChild(scoreText)
    gamePainel.appendChild(gameLogo)
    gamePainel.appendChild(btnStart)
    gamePainel.appendChild(btnRetry)
    gamePainel.appendChild(inputScore)
    centerPainel.appendChild(gamePainel)
    body.appendChild(centerPainel)

}
createPainel()

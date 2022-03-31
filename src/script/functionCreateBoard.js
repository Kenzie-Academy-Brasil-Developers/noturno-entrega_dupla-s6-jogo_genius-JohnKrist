function createBoard(){
    const body = document.getElementById('root')
    
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
    const body = document.getElementById('root')

    const centerPainel = document.createElement('div')
    centerPainel.classList.add('centerPainel')
    
    const gamePainel = document.createElement('div')
    gamePainel.classList.add('gamePainel')
    
    const inputScore = document.createElement('input')
    inputScore.classList.add('inputScore')
    
    const btnStart = document.createElement('button')
    btnStart.classList.add('btnStart')
    btnStart.innerText = 'start'

    const btnRetry = document.createElement('button')
    btnRetry.classList.add('btnRetry')
    btnRetry.innerText = 'Restart'


    const gameLogo = document.createElement('div')
    gameLogo.classList.add('gameLogo')
    gameLogo.innerText = "Genius"
    
    gamePainel.appendChild(gameLogo)
    gamePainel.appendChild(inputScore)
    gamePainel.appendChild(btnStart)
    gamePainel.appendChild(btnRetry)
    centerPainel.appendChild(gamePainel)
    body.appendChild(centerPainel)

}
createPainel()

{/* <div class="centerPainel"> */}
{/* <!-- <div class="gamePainel"> --> */}
{/* <!-- <div class="gameLogo">Genius</div> --> */}
{/* <!-- </div> --> */}
{/* </div> */}
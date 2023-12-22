let playBoard;
let player;
let winner;

const boardEL = document.getElementById("playboard")
const playAgain = document.getElementById("play-again")
playAgain.addEventListener("click", init)
boardEL.addEventListener("click", handleClick)

function init () { 
    playBoard = [
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
    ]
    player = 1
    winner = null
    render()
}
init()


function handleClick(evt) {
    const row = parseInt(evt.target.id[1])
    const col = playBoard[row].indexOf(null)
    playBoard[row][col] = player
    player *= -1
    winner = checkWinner()
    render()
}

function render(){
    for(let i = 0; i < playBoard.length; i++) {
        for(let j = 0; j < playBoard[i].length; j++) {
            const cell = document.getElementById(`r${i}c${j}`)
            if(playBoard[i][j] === 1) cell.style.backgroundColor = "red" 
            if(playBoard[i][j] === -1) cell.style.backgroundColor = "yellow" 
            if(playBoard[i][j] === null) cell.style.backgroundColor = "white" 
        }
    }
}

function checkWinner() {

}
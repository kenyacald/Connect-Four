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
    winner = checkWinner(row, col)
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

function checkWinner(row, col) {
    const player = playBoard[row][col]
    const winner = checkVerticalWinner(row, col, player) ||
    checkHorizontalWinner(row, col, player) ||
    checkLeftDiag(row, col, player)  ||
    checkRightDiag(row, col, player)    ||
    checkTie(row, col, player)
    console.log(winner)
    return winner

}

function checkVerticalWinner(row, col, player) {
    let count = 1
    let startCol = col - 1
   while(startCol >= 0 && playBoard[row][startCol] === player) {
    count += 1
    startCol -= 1

   }
   return count >= 4 ? player : null
}
function checkHorizontalWinner(row, col, player) {
    let count = 1
    let startRowLeft = row - 1
    let startRowRight = row + 1
   while(startRowLeft >= 0 && playBoard[startRowLeft][col] === player) {
    count += 1
    startRowLeft -= 1

   }
   while (startRowRight <= 6 && playBoard[startRowRight][col] === player) {
    count += 1
    startRowRight += 1

   }
   return count >= 4 ? player : null

}
function checkLeftDiag(row, col, player) {
    let count = 1
    let startColLeft = col + 1
    let startRowLeft = row - 1
   while(startRowLeft >= 0 && startColLeft < 6 && playBoard[startRowLeft][startColLeft] === player) {
    count += 1
    startColLeft += 1
    startRowLeft -= 1

   }
   let startColRight = col - 1
   let startRowRight = row + 1

   while(startColRight >= 0 && startRowRight < 7 && playBoard[startRowRight][startColRight] === player) {
    count += 1
    startColRight -= 1
    startRowRight += 1

   }
   return count >= 4 ? player : null

}
function checkRightDiag(row, col, player) {
    let count = 1
    let startColLeft = col - 1
    let startColRight = col + 1
   while(startColLeft >= 0 && playBoard [startColLeft] [row] === player) {
    count += 1
    startColLeft -= 1

   }
   while (startColRight <= 5 && playBoard[startColRight][row] === player) {
    count += 1
    startColRight += 1
   }
   return count >= 4 ? player : null

}
function checkTie() {
  return playBoard.flat().includes(null) ? null : "tie"

}

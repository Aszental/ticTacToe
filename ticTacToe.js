var board = document.querySelector('.board')
var currentPlayer = 0

var playerOne = function (event) {
  event.target.style.backgroundColor = 'green'
}

var playerTwo = function (event) {
  event.target.style.backgroundColor = 'blue'
}

board.addEventListener('click', turn);


function turn(event) {
  console.log('clicked')

  if (currentPlayer === 0) {
    event.target.innerHTML = 'X'
    currentPlayer = 1

  }
  else if (currentPlayer === 1) {
    event.target.innerHTML = 'Y'
    currentPlayer = 0
  }
}

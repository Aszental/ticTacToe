var board = document.querySelector('.board')
var playerSpan = document.getElementById('current-player')
var currentPlayer = 0

var xMoves = []
var yMoves = []


var playerOne = function (event) {
  event.target.style.backgroundColor = 'green'
}

var playerTwo = function (event) {
  event.target.style.backgroundColor = 'blue'
}

board.addEventListener('click', turn);

function image(thisImg) {
    document.getElementById('imageDiv').appendChild(img);
}


function turn(event) {
  
  if (event.target.innerHTML === '') {

    if (currentPlayer === 0) {
      event.target.innerHTML = 'X'
      currentPlayer = 1;
      playerSpan.innerHTML='Y';
      xMoves.push(event.target.id);
  }

    else if (currentPlayer === 1) {
      event.target.innerHTML = 'Y'
      currentPlayer = 0;
      playerSpan.innerHTML='X';
      yMoves.push(event.target.id);
  }
}
}

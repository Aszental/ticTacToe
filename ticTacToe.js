var board = document.querySelector('.board')
var playerSpan = document.getElementById('current-player')
var currentPlayer = 'X'

var winConditions = [[11, 12, 13], [21, 22, 23], [31, 22, 33], [11, 21,31], [12, 22, 32],[13, 23, 33], [11, 22, 33], [13, 22, 31]]
var xMoves = []
var yMoves = []
var isWinner = false;


// var playerOne = function (event) {
//   event.target.style.backgroundColor = 'green'
// }
//
// var playerTwo = function (event) {
//   event.target.style.backgroundColor = 'blue'
// }

board.addEventListener('click', turn);

// function image(thisImg) {
//     document.getElementById('imageDiv').appendChild(img);
// }


function turn(event) {
  if (event.target.className === 'square') {

    if (currentPlayer === 'X') {
      event.target.className = 'x';
      xMoves.push(parseInt(event.target.id));
      winChecker(xMoves)
      currentPlayer = 'Y';
      document.getElementById('current-player').innerHTML = "Y"


  }

    else if (currentPlayer === 'Y') {
      event.target.className = 'y';
      yMoves.push(parseInt(event.target.id));
      winChecker(yMoves)
      currentPlayer = 'X';
      document.getElementById('current-player').innerHTML = "X"

  }

 }
  else {
    return false;
  }
}


function winChecker(moves) {
for (var j = 0; j < winConditions.length; j++) {
	var matches = [];
	for (var i = 0; i < moves.length; i++) {
				var match = false;
		for (var x = 0; x < winConditions[j].length; x++ ) {
			if (moves[i] === winConditions[j][x]) {
				match = true;
				matches.push(match)
        console.log(matches)
			}
		}
	}
	if (matches.length === 3) {

	 isWinner = true;
	}

}
  if(isWinner) {
    window.alert(currentPlayer + " Is the winner!")
    boardReset();
  }
   }

function boardReset() {
  xMoves = []
  yMoves = []
  isWinner = false;
  var elsX = document.getElementsByClassName('x');
  var elsY = document.getElementsByClassName('y');

  while (elsX.length) {
    elsX[0].className = 'square';
}
while (elsY.length) {
  elsY[0].className = 'square';

}
}

var board = document.querySelector('.board')
var playerSpan = document.getElementById('current-player')
var currentPlayer = 0

var winConditions = [[11, 12, 13], [11, 21, 23], [21, 22, 23], [31, 32,33], [21, 22, 23],[31, 32, 33], [11, 22, 23], [13, 22, 31],[13, 23, 33]]
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
  console.log(event.target.className)
  if (event.target.className === 'square') {

    if (currentPlayer === 0) {
      event.target.className = 'x';
      currentPlayer = 1;
      xMoves.push(parseInt(event.target.id));
      winChecker(xMoves)
  }

    else if (currentPlayer === 1) {
      event.target.className = 'y';
      currentPlayer = 0;
      yMoves.push(parseInt(event.target.id));
      winChecker(yMoves)
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
			}
		}
	}

	if (matches.length === 3) {
	 isWinner = true;
	}

}
  if(isWinner) {
    window.alert(currentPlayer + " Is the winner!")
  }
   }

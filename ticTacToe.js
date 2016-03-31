var board = document.querySelector('.board')
var square = document.querySelector('.square')
var playerSpan = document.getElementById('current-player')
var currentPlayer = 'Hilary'
var hilaryHoverBackground = "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.7) 100%), url(/ticTacToe/Images/hilary.jpg) repeat 0 0"
var trumpHoverBackground = "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.7) 100%), url(/ticTacToe/Images/trump.jpg) repeat 0 0"
var winConditions = [[11, 12, 13], [21, 22, 23], [31, 32, 33], [11, 21 ,31], [12, 22, 32],[13, 23, 33], [11, 22, 33], [13, 22, 31]]
var allCells = [11,12,13,21,22,23,31,32,33]
var xMoves = []
var yMoves = []
var allMoves = function() {
  return xMoves.concat(yMoves);
}
var isWinner = false;
var isTie = false;
var xWins = 0;
var yWins = 0;




// var playerOne = function (event) {
//   event.target.style.backgroundColor = 'green'
// }
//
// var playerTwo = function (event) {
//   event.target.style.backgroundColor = 'blue'
// }

board.addEventListener('click', turn);

board.addEventListener("mouseover", function (event) {
  if (event.target.className === "square") {
    if (currentPlayer === "Hilary")
    event.target.style.background = hilaryHoverBackground;
    else if (currentPlayer === "Trump") {
      event.target.style.background = trumpHoverBackground;
   }
  }
 }
)

board.addEventListener("mouseout", function (event) {
    event.target.style.background = ""
  }
)


// function image(thisImg) {
//     document.getElementById('imageDiv').appendChild(img);
// }


function turn(event) {
  if (event.target.className === 'square') { // check if class has already been applied
    if (currentPlayer === 'Hilary') {
      event.target.className = 'x'; // change square to x class
      xMoves.push(parseInt(event.target.id)); //push to moves array
      winChecker(xMoves) // see if x is winner
      currentPlayer = 'Trump'; // set player to y
      document.getElementById('current-player').innerHTML = "Trump"
      computerMove();
  }

    else if (currentPlayer === 'Trump') {
    /*  event.target.className = 'y';
      yMoves.push(parseInt(event.target.id));
      winChecker(yMoves)
      currentPlayer = 'Hilary';
      document.getElementById('current-player').innerHTML = "Hilary"
      document.getElementById('currentplayer').style.background = hilaryHoverBackground */
  }

 }
}


function winChecker(moves) {
for (var j = 0; j < winConditions.length; j++) { //loop through win array
	var matches = [];  //empty array to hold matches
	for (var i = 0; i < moves.length; i++) { //loops through the moves
				var match = false;
		for (var x = 0; x < winConditions[j].length; x++ ) //loops through individual wins in the wins array
     {
			if (moves[i] === winConditions[j][x]) // compares the moves to individual win array
       {
				match = true;
				matches.push(match) //push the true to the array.
			}
		}
	}
	if (matches.length === 3) //if found 3 matches there is a winner

  {

	 isWinner = true;
	}

  if (xMoves.length + yMoves.length === 9) //if 9 moves been a tie
  {
	 isTie = true;
	}

}

  if(isWinner) {
    document.getElementById('winner').innerHTML = (currentPlayer + "  was the winner!" )
    winCounter();
    if (currentPlayer === "Trump") {
      trumpWins()
      boardReset();
    }
    else {
    boardReset();
    }
  }

  if(isTie) {
    document.getElementById('winner').innerHTML = ( "It was a Tie!" )
    boardReset();
  }
   }

function boardReset() {
  currentPlayer = "Hilary"
  xMoves = []
  yMoves = []
  isWinner = false;
  isTie = false;
  // iterates through the x and why clases and changes it back to squre
  var elsX = document.getElementsByClassName('x');
  var elsY = document.getElementsByClassName('y');
  while (elsX.length) {
    elsX[0].className = 'square';
  }
  while (elsY.length) {
    elsY[0].className = 'square';


}



}


function winCounter() {
  if (currentPlayer === 'Hilary'){
    xWins++
    document.getElementById('xwins').innerHTML = xWins
  }
  else if (currentPlayer === 'Trump'){
    yWins++
    document.getElementById('ywins').innerHTML = yWins
  }
}


//function to get the remaining moves available to the computer
function computerMoves(a1, a2) {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    return diff;
};

//function that will make the computer move

function computerMove() {
  {
  var availableMoves = computerMoves(allMoves(), allCells) //get available moves, cells not been played
  var nextMove = availableMoves[Math.floor(Math.random() * availableMoves.length)]; // get the next move randomly
  document.getElementById(nextMove).className = 'y' //asign trump class to the next move
  yMoves.push(parseInt(nextMove)); //push the computer move into the yMoves array.
  winChecker(yMoves) // see if the computer has won.
  currentPlayer = 'Hilary'; // set player to hilary, the human player
  document.getElementById('current-player').innerHTML = "Hilary" // set current player html to hilary
}
}


$(".youtube").delay( 8000 ).colorbox({iframe:true, innerWidth:640, innerHeight:390});
function trumpWins() {
  $('.youtube').click();
}

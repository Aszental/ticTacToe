var board = document.querySelector('.board')
var square = document.querySelector('.square')
var playerSpan = document.getElementById('current-player')
var currentPlayer = 'Israel'
var israelHoverBackground = "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.7) 100%), url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/660px-Flag_of_Israel.svg.png) repeat 0 0"
var palestineHoverBackground = "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.7) 100%), url(http://www.crwflags.com/fotw/images/p/ps_pent.gif) repeat 0 0"
var winConditions = [[11, 12, 13], [21, 22, 23], [31, 32, 33], [11, 21,31], [12, 22, 32],[13, 23, 33], [11, 22, 33], [13, 22, 31]]
var xMoves = []
var yMoves = []
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
    if (currentPlayer === "Israel")
    event.target.style.background = israelHoverBackground;

    else if (currentPlayer === "Palestine") {
      event.target.style.background = palestineHoverBackground;

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
    if (currentPlayer === 'Israel') {
      event.target.className = 'x'; // change square to x class
      xMoves.push(parseInt(event.target.id)); //push to moves array
      winChecker(xMoves) // see if x is winner
      currentPlayer = 'Palestine'; // set player to y
      document.getElementById('current-player').innerHTML = "Palestine"
      document.getElementById('currentplayer').style.background = palestineHoverBackground


  }

    else if (currentPlayer === 'Palestine') {
      event.target.className = 'y';
      yMoves.push(parseInt(event.target.id));
      winChecker(yMoves)
      currentPlayer = 'Israel';
      document.getElementById('current-player').innerHTML = "Israel"
      document.getElementById('currentplayer').style.background = israelHoverBackground
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
    window.alert(currentPlayer + " Is the winner!")
    winCounter();
    boardReset();
  }
  if(isTie) {
    window.alert("It is a Tie!")
    boardReset();
  }
   }

function boardReset() {
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
  if (currentPlayer === 'Israel'){
    xWins++
    document.getElementById('xwins').innerHTML = xWins
  }
  else if (currentPlayer === 'Palestine'){
    yWins++
    document.getElementById('ywins').innerHTML = xWins

  }
}

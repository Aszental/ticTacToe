var clickedSquare = document.querySelector('.square')
var board = document.querySelector('.board')

var id = 0



board.addEventListener('click', function (event)
  {

    var clickedSquareId = event.target.id;
    event.target.style.backgroundColor = "red";
  }
)

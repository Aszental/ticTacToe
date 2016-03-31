#Trump v Hilary Tic Tac Toe

##Main Technologies

The javascript is made up of 4 main functions, the first one 'turn' which powers each players turn. The second is 'winChecker' which checks after each turn is made if there is a win. 'boardReset' and 'winCounter' which resets the board on a win or a tie and increments the counter. I added 'computerMove' which randomly pics and empty spot for the computer.

Technologies used are Javascript and Jquery Colorbox for the video overlay.  

Approach taken for determining the win was to give each div on the board an ID which corresponds to the position. The winChecker function on each turns loops through the current players moves and checks them against a nested array of winning combinations. If the check return 3 True results, meaning it has matched 3 in a row then the current player will be determined the winner. 

Main difficulties i had was hardcoding things which made it difficult to add features down the track, i also struggled with the CSS initially to make it look polished.

For future versions:
  Select one or two players.
  Select a character.
  Have a smart AI.
  Polish the design.

Github Repo -> https://github.com/Aszental/ticTacToe/tree/gh-pages
Online version -> http://aszental.github.io/ticTacToe/

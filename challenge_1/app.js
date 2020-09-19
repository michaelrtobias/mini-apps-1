console.log('app.js linked')

var gameStatus = ["", "", "", "", "", "", "", "", ""];


var square1 = document.getElementById("square1")
var square2 = document.getElementById("square2")
var square3 = document.getElementById("square3")
var square4 = document.getElementById("square4")
var square5 = document.getElementById("square5")
var square6 = document.getElementById("square6")
var square7 = document.getElementById("square7")
var square8 = document.getElementById("square8")
var square9 = document.getElementById("square9")

var useX = true;
var roundWon = false;
square1.addEventListener("click", function () {
  if (square1.innerHTML) {
    console.log('error: square1 has been chosen already')
  } else {
    square1.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[0] = square1.innerHTML;
    checkWinner(gameStatus);
  }


})
square2.addEventListener("click", function () {
  if (square2.innerHTML) {
    console.log('error: square2 has been chosen already')
  } else {

    square2.innerHTML = (useX === true ? "X" : "O");
  useX = !useX;
  gameStatus[1] = square2.innerHTML;
    checkWinner(gameStatus);
  }


})
square3.addEventListener("click", function () {
  if (square3.innerHTML) {
    console.log('error: square3 has been chosen already')
  } else {
    square3.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[2] = square3.innerHTML;
    checkWinner(gameStatus);
  }
})
square4.addEventListener("click", function () {
  if (square4.innerHTML) {
    console.log('error: square4 has been chosen already')
  } else {
    square4.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[3] = square4.innerHTML;
    checkWinner(gameStatus);
  }
})
square5.addEventListener("click", function () {
  if (square5.innerHTML) {
    console.log('error: square5 has been chosen already')
  } else {
    square5.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[4] = square5.innerHTML;
    checkWinner(gameStatus);
  }
})
square6.addEventListener("click", function () {
  if (square6.innerHTML) {
    console.log('error: square6 has been chosen already')
  } else {
    square6.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
  }
  gameStatus[5] = square6.innerHTML;
  checkWinner(gameStatus);
})
square7.addEventListener("click", function () {
  if (square7.innerHTML) {
    console.log('error: square7 has been chosen already')
  } else {
    square7.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[6] = square7.innerHTML;
    checkWinner(gameStatus);
  }
})
square8.addEventListener("click", function () {
  if (square8.innerHTML) {
    console.log('error: square8 has been chosen already')
  } else {
    square8.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[7] = square8.innerHTML;
    checkWinner(gameStatus);
  }
})
square9.addEventListener("click", function () {
  if (square9.innerHTML) {
    console.log('error: square9 has been chosen already')
  } else {
    square9.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[8] = square9.innerHTML;
    checkWinner(gameStatus);
  }
})


var checkWinner = function (currentState) {
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]
var winningPlayer;
for (var i = 0; i < winningCombinations.length; i++) {
  var combo = winningCombinations[i];
  var a = currentState[combo[0]];
  var b = currentState[combo[1]];
  var c = currentState[combo[2]];
  if (a === '' || b === '' || c === '') {
    continue;
  }
  if (a === b && b === a) {
    roundWon = true;
    winningPlayer = a;
    break;
  }
}
if (roundWon) {
  document.getElementById('winnerCircle').innerHTML = 'Congratulations Player ' + winningPlayer + '! You Won'
}
}




// reset function with event listener. making
document.getElementById('resetbtn').addEventListener('click', () => {
  //empty game status
  gameStatus = ['', '', '', '', '', '', '', '', ''];
  //reset innerHTML
  square1.innerHTML = "";
  square2.innerHTML = "";
  square3.innerHTML = "";
  square4.innerHTML = "";
  square5.innerHTML = "";
  square6.innerHTML = "";
  square7.innerHTML = "";
  square8.innerHTML = "";
  square9.innerHTML = "";
  //reset useX
  useX = true;
  //reset round won
  document.getElementById("winnerCircle").innerHTML = "Pick A Tile To Win!";
})

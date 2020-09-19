console.log('app.js linked')

var gameStatus = ["", "", "", "", "", "", "", "", ""];
var useX = true;
var gameActive = true;
var tie = false;
var square1 = document.getElementById("square1")
var square2 = document.getElementById("square2")
var square3 = document.getElementById("square3")
var square4 = document.getElementById("square4")
var square5 = document.getElementById("square5")
var square6 = document.getElementById("square6")
var square7 = document.getElementById("square7")
var square8 = document.getElementById("square8")
var square9 = document.getElementById("square9")



square1.addEventListener("click", function () {
  if (square1.innerHTML) {
    console.log('error: square1 has been chosen already')
  } else {
    if (gameActive) {
    square1.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[0] = square1.innerHTML;
    checkWinner();
    }
  }


})
square2.addEventListener("click", function () {
  if (square2.innerHTML) {
    console.log('error: square2 has been chosen already')
  } else {
    if (gameActive) {
    square2.innerHTML = (useX === true ? "X" : "O");
  useX = !useX;
  gameStatus[1] = square2.innerHTML;
    checkWinner();
  }
  }

})
square3.addEventListener("click", function () {
  if (square3.innerHTML) {
    console.log('error: square3 has been chosen already')
  } else {
    if (gameActive) {
    square3.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[2] = square3.innerHTML;
    checkWinner();
  }
}
})
square4.addEventListener("click", function () {
  if (square4.innerHTML) {
    console.log('error: square4 has been chosen already')
  } else {
    if (gameActive) {
    square4.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[3] = square4.innerHTML;
    checkWinner();
  }
}
})
square5.addEventListener("click", function () {
  if (square5.innerHTML) {
    console.log('error: square5 has been chosen already')
  } else {
    if (gameActive) {
    square5.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[4] = square5.innerHTML;
    checkWinner();
  }
}
})
square6.addEventListener("click", function () {
  if (square6.innerHTML) {
    console.log('error: square6 has been chosen already')
  } else {
    if (gameActive) {
    square6.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;

  gameStatus[5] = square6.innerHTML;
  checkWinner();
}}
})
square7.addEventListener("click", function () {
  if (square7.innerHTML) {
    console.log('error: square7 has been chosen already')
  } else {
    if (gameActive) {
    square7.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[6] = square7.innerHTML;
    checkWinner();
  }
}
})
square8.addEventListener("click", function () {
  if (square8.innerHTML) {
    console.log('error: square8 has been chosen already')
  } else {
    if (gameActive) {
    square8.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[7] = square8.innerHTML;
    checkWinner();
  }}
})
square9.addEventListener("click", function () {
  if (square9.innerHTML) {
    console.log('error: square9 has been chosen already')
  } else {
    if (gameActive) {
    square9.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[8] = square9.innerHTML;
    checkWinner();
  }}
})

var checkWinner = function () {
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
var roundWon = false;
var winningPlayer;
for (var i = 0; i < winningCombinations.length; i++) {
  var combo = winningCombinations[i];

  var a = gameStatus[combo[0]];
  var b = gameStatus[combo[1]];
  var c = gameStatus[combo[2]];
  if (a === '' || b === '' || c === '') {
    continue;
  }
  if (a === b && b === c) {
    roundWon = true;
    winningPlayer = a;

    break;
  }
}
if (roundWon) {
  document.getElementById('winnerCircle').innerHTML = 'Congratulations Player ' + winningPlayer + '! You Won';
  gameActive = false;
  console.log('useX: ' + useX);
  console.log('roundWon: ' + roundWon);
  console.log('gameStatus: ' + gameStatus);
}
if (!roundWon && gameStatus.indexOf("") === -1) {

  document.getElementById('winnerCircle').innerHTML = 'TIE <br> Play Again';
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
  roundWon = false;
  document.getElementById("winnerCircle").innerHTML = "Pick A Tile To Win!";
  //reset game activeness
  gameActive = true;
})

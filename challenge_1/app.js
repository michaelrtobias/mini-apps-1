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

let useX = true;

square1.addEventListener("click", function () {
  if (square1.innerHTML) {
    console.log('error: square1 has been chosen')
  } else {
    square1.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[0] = square1.innerHTML;

  }


})
square2.addEventListener("click", function () {
  if (square2.innerHTML) {
    console.log('error: square2 has been chosen')
  } else {

    square2.innerHTML = (useX === true ? "X" : "O");
  useX = !useX;
  gameStatus[1] = square2.innerHTML;

  }


})
square3.addEventListener("click", function () {
  if (square3.innerHTML) {
    console.log('error: square3 has been chosen')
  } else {
    square3.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[2] = square3.innerHTML;

  }
})
square4.addEventListener("click", function () {
  if (square4.innerHTML) {
    console.log('error: square4 has been chosen')
  } else {
    square4.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[3] = square4.innerHTML;

  }
})
square5.addEventListener("click", function () {
  if (square5.innerHTML) {
    console.log('error: square5 has been chosen')
  } else {
    square5.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[4] = square5.innerHTML;

  }
})
square6.addEventListener("click", function () {
  if (square6.innerHTML) {
    console.log('error: square6 has been chosen')
  } else {
    square6.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
  }
  gameStatus[5] = square6.innerHTML;

})
square7.addEventListener("click", function () {
  if (square7.innerHTML) {
    console.log('error: square7 has been chosen')
  } else {
    square7.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[6] = square7.innerHTML;

  }
})
square8.addEventListener("click", function () {
  if (square8.innerHTML) {
    console.log('error: square8 has been chosen')
  } else {
    square8.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[7] = square8.innerHTML;

  }
})
square9.addEventListener("click", function () {
  if (square9.innerHTML) {
    console.log('error: square9 has been chosen')
  } else {
    square9.innerHTML = (useX === true ? "X" : "O");
    useX = !useX;
    gameStatus[8] = square9.innerHTML;
  }
})


var checkWinner = function () {

}

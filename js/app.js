///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  turn = "X";

  render();
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });
}

function takeTurn(e) {
  let index = squares.findIndex(function(square) {
    return square === e.target;
  });

  board[index] = turn;
  turn = turn === "X" ? "O" : "X";

  render();
}

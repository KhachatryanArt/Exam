// function fibonacci(number) {
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;
//   console.log(n1);
//   console.log(n2);

//   nextTerm = n1 + n2;

//   while (nextTerm <= number) {
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
//   }
// }
// fibonacci(50);
///////////////////////////////////////////////////////////////////////////////////////////
// function sum(n, i, j) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum - i - j;
//   }
//   let count = 0;
//   function number(n) {
//     let k = 0;

//     for (let i = 1; i <= n; i++) {
//       for (let j = 1; j <= n; j++) {
//         if (i !== j && i * j === sum(n, i, j) && i + j != k) {
//           k = i + j;
//           count++;
//           console.log("N" + count + " - " + n);
//           console.log("a = " + i);
//           console.log("b = " + j);
//         }
//       }
//     }
//   }
//   const num = + prompt("Enter the number:")
//   for (let i = 0; i < num; i++) {
//     number(i);
//   }
/////////////////////////////////////////////////////////////////////////
function drawBoard(board) {
  console.log(" ");
  console.log(
    " " +
      (board["7"] || "7 ") +
      " | " +
      (board["8"] || " 8 ") +
      " | " +
      (board["9"] || " 9 ")
  );
  console.log("---------------");
  console.log(
    " " +
      (board["4"] || "4 ") +
      " | " +
      (board["5"] || " 5 ") +
      " | " +
      (board["6"] || " 6 ")
  );
  console.log("---------------");
  console.log(
    " " +
      (board["1"] || "1 ") +
      " | " +
      (board["2"] || " 2 ") +
      " | " +
      (board["3"] || " 3 ")
  );
  console.log(" ");
  console.groupEnd();
}

let defaultBoard = () => {
  return {
    7: null,
    8: null,
    9: null,
    4: null,
    5: null,
    6: null,
    1: null,
    2: null,
    3: null,
  };
};

const defaultState = () => {
  return {
    turn: "X",
    isGameOver: false,
    tieCounter: 0,
  };
};

let defaultConfig = {
  player1: {
    title: "Player 1",
    symbol: "X",
  },
  player2: {
    title: "Player 2",
    symbol: "O",
  },
};

let board = defaultBoard();
let gameState = defaultState();

drawBoard(board);

function solutions(board) {
  return (
    false ||
    (board["7"] && board["7"] == board["8"] && board["7"] == board["9"]) ||
    (board["4"] && board["4"] == board["5"] && board["4"] == board["6"]) ||
    (board["1"] && board["1"] == board["2"] && board["1"] == board["3"]) ||
    (board["7"] && board["7"] == board["4"] && board["7"] == board["1"]) ||
    (board["8"] && board["8"] == board["5"] && board["8"] == board["2"]) ||
    (board["9"] && board["9"] == board["6"] && board["9"] == board["3"]) ||
    (board["7"] && board["7"] == board["5"] && board["7"] == board["3"]) ||
    (board["9"] && board["9"] == board["5"] && board["9"] == board["1"])
  );
}

function isTie(num, isGameOver) {
  if (num == 9 && !isGameOver) {
    console.log(
      "Game  is tie ! If you want to play again type restart() and press Enter"
    );
    isGameOver = true;
  }
}

function x(number) {
  if (gameState.isGameOver) {
    return console.log(
      "Game is over ! If you want to play again type restart() and press Enter"
    );
  } else {
    if (number <= 9 && number >= 0 && gameState.turn == "X") {
      if (board[number] == null) {
        gameState.tieCounter++;
        board[number] = "X";
        console.clear();
        drawBoard(board);
        gameState.turn = "O";
        if (solutions(board)) {
          console.log(
            `X wins! If you want to play again type restart() and press Enter`
          );
          gameState.isGameOver = true;
        }
      } else {
        console.log("Number is already used");
      }
    } else {
      console.log("Error number or it is not your turn");
    }
    isTie(gameState.tieCounter, gameState.isGameOver);
  }
}

function y(number) {
  if (gameState.isGameOver) {
    return console.log(
      "Game is over ! If you want to play again type restart() and press Enter"
    );
  } else {
    if (number <= 9 && number >= 0 && gameState.turn == "O") {
      if (board[number] == null) {
        gameState.tieCounter++;
        board[number] = "O";
        console.clear();
        drawBoard(board);
        gameState.turn = "X";
        if (solutions(board)) {
          console.log(
            `Y wins! If you want to play again type restart() and press Enter`
          );
          gameState.isGameOver = true;
        }
      } else {
        console.log("Number is already used");
      }
    } else {
      console.log("Error number or it is not your turn");
    }
    isTie(gameState.tieCounter, gameState.isGameOver);
  }
}

function restart() {
  console.clear();
  gameState = defaultState();
  board = defaultBoard();
  drawBoard(board);
}

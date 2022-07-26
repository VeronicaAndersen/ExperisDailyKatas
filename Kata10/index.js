// Tic Tac Toe
// Given a 3x3 matrix of a completed tic-tac-toe game, create a function that
// returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O"
// represent themselves on the matrix, and "E" represents an empty spot.

let xVinner = "Winner: X";
let oVinner = "Winner: O";
let draw = "Draw";
let winner = "";


function ticTacToe(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);

        if (element[0] === "X" && element[1] === "X" && element[2] === "X") {
            winner = xVinner;
        } else if (element[0] === "O" && element[1] === "O" && element[2] === "O") {
            winner = oVinner;
        }

        if (element[0] === "X" && element[0][0] === "X" && element[0][0][0] === "X") {
            winner = xVinner;
        } else if (element[0] === "O" && element[0][0] === "O" && element[0][0][0] === "O") {
            winner = oVinner;
        }

        if (element[1] === "X" && element[1][0] === "X" && element[1][0][0] === "X") {
            winner = xVinner;
        } else if (element[1] === "O" && element[1][0] === "O" && element[1][0][0] === "O") {
            winner = oVinner;
        }

        if (element[2] === "X" && element[2][0] === "X" && element[2][0][0] === "X") {
            winner = xVinner;
        } else if (element[2] === "O" && element[2][0] === "O" && element[2][0][0] === "O") {
            winner = oVinner;
        }


        // if (element[0] === "X" && element[1][1] === "X" && element[2][2][2] === "X") {
        //     winner = xVinner;
        // } else if (element[0] === "O" && element[1][1] === "O" && element[2][2][2] === "O") {
        //     winner = oVinner;
        // }


        //console.log(element[0][0]);
    }
    if (winner === "") {
        winner = draw;
    }

    console.log(winner);
}


ticTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "O"]
]) // ➞ "X"

// ticTacToe([
//     ["O", "O", "O"],
//     ["O", "X", "X"],
//     ["E", "X", "X"]
// ]) // ➞ "O"

// ticTacToe([
//     ["X", "X", "O"],
//     ["O", "O", "X"],
//     ["X", "X", "O"]
// ]) // ➞ "Draw"
let winner;

function ticTacToe(ticArray) {
    var x = false;
    var o = false;
    for (var i = 0; i < 3; i++) {
        if (ticArray[i][0] === 'X' && ticArray[i][1] === 'X' && ticArray[i][2] === 'X') x = true;
        if (ticArray[i][0] === 'O' && ticArray[i][1] === 'O' && ticArray[i][2] === 'O') o = true;
        if (ticArray[0][i] === 'X' && ticArray[1][i] === 'X' && ticArray[2][i] === 'X') x = true;
        if (ticArray[0][i] === 'O' && ticArray[1][i] === 'O' && ticArray[2][i] === 'O') o = true;
    }
    if (ticArray[0][0] === 'X' && ticArray[1][1] === 'X' && ticArray[2][2] === 'X') x = true;
    if (ticArray[0][0] === 'O' && ticArray[1][1] === 'O' && ticArray[2][2] === 'O') o = true;
    if (ticArray[0][2] === 'X' && ticArray[1][1] === 'X' && ticArray[2][0] === 'X') x = true;
    if (ticArray[0][2] === 'O' && ticArray[1][1] === 'O' && ticArray[2][0] === 'O') o = true;
    if (x && !o) winner = "Winner: X";
    if (!x && o) winner = "Winner: O";
    if (!x && !o) winner = "Winner: Draw";

    console.log(winner);
}

ticTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
]) // ➞ "X"
ticTacToe([
    ["O", "E", "O"],
    ["O", "X", "X"],
    ["O", "X", "X"]
]) // ➞ "O"
ticTacToe([
    ["X", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
]) // ➞ "Draw"
ticTacToe([
    ["O", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
]) // ➞ "O"
function isRowSafe(board, row, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num) {
            return true;
        }
    }
    return false;
}

function isColSafe(board, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) {
            return true;
        }
    }
    return false;
}

function isSectionSafe(board, row, col, num) {
    let r = row - Math.ceil(row % 3);
    let c = col - Math.ceil(col % 3);
    for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
            if (board[i][j] === num) {
                return true;
            }
        }
    }
    return false;
}

function isSafe(board, row, col, num) {
    return !isRowSafe(board, row) || !isColSafe(board, col) || !isSectionSafe(board, row, col, num);
}

var solveSudoku = function (board) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                for (let i = 1; i <= 9; i++) {
                    board[r][c] = i;
                    if (isSafe(board, r, c, i) && solveSudoku(board)) {
                        return true;
                    }
                    board[r][c] = '.';
                }
                return false;
            }
        }
    }
    return false;
};


let board = [
    [3, '.', 6, 5, '.', 8, 4, '.', '.'],
    [5, 2, '.', '.', '.', '.', '.', '.', '.'],
    ['.', 8, 7, '.', '.', '.', '.', 3, 1],
    ['.', '.', 3, '.', 1, '.', '.', 8, '.'],
    [9, '.', '.', 8, 6, 3, '.', '.', 5],
    ['.', 5, '.', '.', 9, '.', 6, '.', '.'],
    [1, 3, '.', '.', '.', '.', 2, 5, '.'],
    ['.', '.', '.', '.', '.', '.', '.', 7, 4],
    ['.', '.', 5, 2, '.', 6, 3, '.', '.']
];

console.log(solveSudoku(board));
console.log('Complete..')
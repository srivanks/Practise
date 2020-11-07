function knightsTour() {
    let solution = Array(8)
        .fill(new Array(8).fill(-1));
    let xMoves = [2, 1, -1, -2, -2, -1, 1, 2];
    let yMoves = [1, 2, 2, 1, -1, -2, -2, -1];
    solution[0][0] = 1;
    kTourUtil(solution, xMoves, yMoves, 1, 0, 0);
}

function kTourUtil(solution, xMoves, yMoves, mark, x, y) {
    if (mark === 64) {
        console.log(solution);
        return true;
    }
    for (let i = 0; i < 8; i++) {
        let nextX = x + xMoves[i];
        let nextY = y + yMoves[i];
        if (isSafe(nextX, nextY, solution)) {
            solution[nextX][nextY] = mark;
            if (kTourUtil(solution, xMoves, yMoves, mark + 1, nextX, nextY)) {
                return true;
            }
            solution[nextX][nextY] = -1;
        }
    }
    return false;

}

function isSafe(x, y, solution) {
    return x >= 0 && x < 8 && y >= 0 && y < 8 && solution[x][y] === -1;
}

console.log(knightsTour());
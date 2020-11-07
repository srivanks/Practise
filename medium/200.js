var numIslands = function (grid) {

    const callDFS = (i, j) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) return;

        grid[i][j] = 0;

        callDFS(i - 1, j); // up
        callDFS(i + 1, j); // down
        callDFS(i, j - 1); // left
        callDFS(i, j + 1); // right
    }

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                count++;
                callDFS(i, j)
            }
        }
    }
    return count;
};

let grid = [
    [1, 1, 0, 0, 0,],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];

console.log(numIslands(grid));
function cavityMap(grid) {
    const n = grid.length;
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {   
            const current = parseInt(grid[i][j]);
            const top = parseInt(grid[i - 1][j]);
            const bottom = parseInt(grid[i + 1][j]);
            const left = parseInt(grid[i][j - 1]);
            const right = parseInt(grid[i][j + 1]);
            if (current > top && current > bottom && current > left && current > right) {
                grid[i] = grid[i].substring(0, j) + 'X' + grid[i].substring(j + 1);
            }
        }
    }       
    return grid;
}
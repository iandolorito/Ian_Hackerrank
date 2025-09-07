# CAVITY MAP

- Explanation  
The function cavityMap(grid) looks for "cavities" inside a square grid of numbers. A cavity is a spot that is not on the edge and is bigger than the numbers above, below, left, and right of it. The function goes through each inner cell, checks its value against its neighbors, and if it is larger than all of them, it marks that spot with an "X". In the end, it returns the grid again but with all the cavities replaced by "X".

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(cavityMap(["1112", "1912", "1892", "1234"])); // Output: [ '1112', '1X12', '18X2', '1234' ]  
console.log(cavityMap(["989", "191", "111"])); // Output: [ '989', '1X1', '111' ]  
or input any array of strings representing the grid you want
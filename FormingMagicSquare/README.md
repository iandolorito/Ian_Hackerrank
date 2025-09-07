# FORMING MAGIC SQUARE

- Explanation  
The function formingMagicSquare(s) finds the smallest cost to change a 3x3 matrix into a magic square. It checks the given matrix against all possible 3x3 magic squares using numbers 1 to 9. For each one, it adds up the differences between the matching numbers to get the cost. It keeps the lowest cost found and returns it.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(formingMagicSquare([[5,3,4],[1,5,8],[6,4,2]])); // Output: 7  
console.log(formingMagicSquare([[4,9,2],[3,5,7],[8,1,5]])); // Output: 1  
or input any 3x3 matrix you want
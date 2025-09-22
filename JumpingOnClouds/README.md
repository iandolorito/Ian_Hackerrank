# JUMPING ON THE CLOUDS

- Explanation 
This function counts the minimum jumps needed to reach the last cloud. You can jump 1 step or 2 steps, but you must avoid thunderclouds (1). It checks if a 2-step jump is safe, and if yes, it jumps 2, otherwise it jumps 1. Each move increases the jump count until the end is reached.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // Output: 4  
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));    // Output: 3  

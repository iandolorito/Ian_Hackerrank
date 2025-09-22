# APPEND AND DELETE

- Explanation 
This function checks if you can turn string s into string t with exactly k operations. An operation is either deleting the last character or adding a new one. It finds the common part of both strings, counts the needed changes, and decides if it’s possible.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE
console.log(appendAndDelete("hackerhappy", "hackerrank", 9)); // Output: Yes  
console.log(appendAndDelete("aba", "aba", 7));                // Output: Yes  
console.log(appendAndDelete("ashley", "ash", 2));             // Output: No  
Or test it with any two strings and number of moves.

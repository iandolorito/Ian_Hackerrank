# WEIGHTED UNIFORM STRINGS

- Explanation 
This function checks if numbers in queries match the "weights" of uniform strings in s. A weight is the letter’s value (a=1, b=2, ...) multiplied by how many times the letter repeats in a row. It returns "Yes" if a query matches any weight, otherwise "No".

- HOW TO TEST THE FUNCTION
- WRITE THIS IN THE CONSOLE
console.log(weightedUniformStrings("abbcccdddd", [1, 7, 5, 4, 15]));  
// Output: ["Yes", "No", "No", "Yes", "Yes"]  

console.log(weightedUniformStrings("aaabbbbccddd", [9, 7, 8, 12]));  
// Output: ["Yes", "No", "Yes", "Yes"]  
Or test it with any string and queries.
# NON-DIVISIBLE SUBSET

- Explanation 
This function finds the largest subset where the sum of any two numbers is not divisible by k. It counts how many numbers have each remainder when divided by k. From these counts, it picks the better option between pairs of remainders (i and k - i). Special cases are when the remainder is 0 (only one can be chosen) and when i equals k - i (also only one can be chosen).

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE
console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));     // Output: 3  
console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22])); // Output: 3  


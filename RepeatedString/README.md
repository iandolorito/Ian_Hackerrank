# REPEATED STRING

- Explanation 
This function counts how many times the letter 'a' appears in the first n characters of an infinitely repeated string s. It first counts the 'a' in one full copy of s, then multiplies by how many full repeats fit into n. After that, it checks the leftover part (remainder) and adds the extra 'a' from there.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE
console.log(repeatedString("aba", 10)); // Output: 7  
console.log(repeatedString("a", 1000000)); // Output: 1000000  


# TWO CHARACTERS

- Explanation  
The function alternate(s) finds the longest string that can be made using only two different characters, where the characters take turns and never repeat side by side. It first collects all the unique characters from the string. Then it tries every possible pair of these characters. For each pair, it keeps only those two characters from the string and checks if they alternate without breaking the rule. If the string is valid and longer than the current best, it updates the maximum length. At the end, it returns the length of the longest valid alternating string.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(alternate('beabeefeab')); // Output: 5  
console.log(alternate('abaacdabd')); // Output: 4  
or input any string you want
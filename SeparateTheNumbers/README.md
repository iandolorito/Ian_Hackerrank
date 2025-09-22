# SEPARATE NUMBERS

- Explanation 
This function checks if a string of digits can be split into a sequence of increasing numbers with no leading zeros. It tries different starting lengths, then builds the sequence. If the sequence matches the string, it prints "YES" with the first number, otherwise "NO".

- HOW TO TEST THE FUNCTION
- WRITE THIS IN THE CONSOLE
separateNumbers("1234");   // Output: YES 1  
separateNumbers("91011");  // Output: YES 9  
separateNumbers("99100");  // Output: YES 99  
separateNumbers("101103"); // Output: NO  
Or test it with any string of digits.
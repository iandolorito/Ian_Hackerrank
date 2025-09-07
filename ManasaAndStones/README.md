# MANASA AND STONES

- Explanation  
The function stones(n, a, b) works out all the possible values of the last stone in a sequence. It loops through different ways of mixing the two differences a and b, then calculates the total for each case. Each result is stored in a set so there are no duplicates. After the loop, it changes the set into an array, sorts the numbers in order, and returns them as the list of possible last stone values.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(stones(3, 1, 2)); // Output: [2, 3, 4]  
console.log(stones(4, 10, 100)); // Output: [30, 120, 210, 300]  
or input any n, a, and b values you want
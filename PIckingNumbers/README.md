# PICKING NUMBERS

- Explanation  
The function pickingNumbers(a) finds the longest subarray where the difference between numbers is at most 1. It first counts how many times each number appears in the array. Then, for each number, it adds its count with the count of the number before it to check the possible length of a subarray. It keeps the largest length found and returns it.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // Output: 3  
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // Output: 5  
or input any array you want
# BETWEEN TWO SETS

- Explanation 
This function finds how many numbers are between two sets, meaning:  
For every number in the first array `a`, that number must divide evenly into the number we are checking.  
For every number in the second array `b`, the number we are checking must divide evenly into each number in `b`.  
The function checks all numbers between the largest number in `a` and the smallest number in `b`.  
If a number meets both conditions, it is counted.  
The function returns the total count of such numbers.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
    console.log(getTotalX([2, 4], [16, 32, 96]));
or use any arrays you want
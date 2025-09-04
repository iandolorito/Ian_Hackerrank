# DIVISIBLE SUM PAIRS

- Explanation  
This function counts how many pairs of numbers in an array add up to a sum that is divisible by a given number k.  
It checks every possible pair of numbers in the array where the first index is less than the second.  
For each pair, it adds the two numbers and checks if the result can be divided evenly by k.  
If it can, the function increases the count.  
At the end, the function returns the total number of such pairs.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
    console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));  
or use any array and values for n and k
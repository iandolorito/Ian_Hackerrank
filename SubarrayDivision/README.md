# SUBARRAY DIVISION

- Explanation  
This function counts how many ways you can choose a segment of chocolate squares from the array so that the segment has exactly `m` squares and the sum of their values is exactly `d`.  
It checks every possible segment of length `m` in the array.  
For each segment, it adds up the values.  
If the sum matches `d`, it increases the count.  
At the end, the function returns the total number of ways this can be done.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
    console.log(birthday([2, 2, 1, 3, 2], 4, 2));  
or use any array and numbers you
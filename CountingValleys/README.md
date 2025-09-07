# COUNTING VALLEYS

- Explanation  
This function countingValleys(steps, path) counts the number of valleys a hiker goes through during a hike. Here, steps is the total number of steps taken, and path is a string showing each step as either 'U' for up or 'D' for down. The hiker starts at sea level with an altitude of 0. For each step, the altitude increases if it is 'U' and decreases if it is 'D'. A valley is recorded when the hiker returns to sea level after moving up from below. In the end, the function returns the total number of valleys completed.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(countingValleys(8, "DDUUUUDD")); // Output: 1  
console.log(countingValleys(12, "DDUUDDUDUUUD")); // Output: 2  
or input any number of steps and a path string you want
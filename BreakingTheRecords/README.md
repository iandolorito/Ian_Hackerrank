# BREAKING THE RECORDS

- Explanation  
This function checks how many times Maria breaks her best and worst game records during a season.  
It starts by setting the first score as both the highest and lowest record.  
Then, for each game, if her score is higher than her current best, it updates the best record and adds one to the best record count.  
If her score is lower than her current worst, it updates the worst record and adds one to the worst record count.  
At the end, the function returns an array with two numbers: the first is how many times she broke her best record, and the second is how many times she broke her worst record.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
    console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));  
or use any array of scores
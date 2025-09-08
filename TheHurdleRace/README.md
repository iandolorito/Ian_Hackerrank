# THE HURDLE RACE

- Explanation  
This function checks how many extra doses a character needs to jump the tallest hurdle. It finds the tallest hurdle, subtracts the character’s jump height, and if the result is positive, it returns that number. If the character can already jump it, it returns 0.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(hurdleRace(4, [1, 6, 3, 5, 2])); // Output: 2  
console.log(hurdleRace(7, [2, 5, 4, 5, 2])); // Output: 0  
or input any jump height and hurdle heights
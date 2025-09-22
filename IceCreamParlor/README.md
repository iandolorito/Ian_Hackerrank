# ICE CREAM PARLOR

- Explanation 
This function finds two ice cream prices that add up to the money m. It goes through the list of prices and checks if the other price needed to make m was already seen. If yes, it returns the two positions. If not, it saves the current price so it can be used later.
- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE
console.log(icecreamParlor(4, [1, 4, 5, 3, 2])); // Output: [1, 4]  
console.log(icecreamParlor(4, [2, 2, 4, 3]));    // Output: [1, 2]  
or put any number and array you want.

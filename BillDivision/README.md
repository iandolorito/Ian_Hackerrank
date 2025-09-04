# BON APPETIT

- Explanation  
This function checks if Anna was charged the correct amount for her meal. First, it adds up all the items in the bill to get the total. Since Anna didn’t eat the item at index k, that item’s cost is removed before splitting the bill. Her fair share is half of the total without that item. If the amount she paid b is equal to her fair share, the function prints "Bon Appetit". Otherwise, it prints the extra money that Brian needs to give back to Anna.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
bonAppetit([3, 10, 2, 9], 1, 12); // Output: Bon Appetit
bonAppetit([3, 10, 2, 9], 1, 7);  // Output: 5

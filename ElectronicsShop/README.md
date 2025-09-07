# ELECTRONICS SHOP

- Explanation  
This function getMoneySpent(keyboards, drives, b) finds the most money you can spend on buying one keyboard and one drive without going over the budget. Here, keyboards is the list of keyboard prices, drives is the list of drive prices, and b is the budget. It checks every possible pair of keyboard and drive by adding their prices. If the total cost is within the budget and higher than the current best, it updates the maximum. If no pair fits the budget, it returns -1.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // Output: 58  
console.log(getMoneySpent([4], [5], 5)); // Output: -1  
or input any arrays and budget you want
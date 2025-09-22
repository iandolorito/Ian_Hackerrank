# LLIBRARY FINE

- Explanation 
This function calculates the fine for returning a library book late. If the book is returned in a later year, the fine is 10000. If it’s the same year but a later month, the fine is 500 for each month late. If it’s the same month and year but a later day, the fine is 15 for each day late. If the book is returned on time or earlier, the fine is 0.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE
console.log(libraryFine(9, 6, 2015, 6, 6, 2015));  // Output: 45  
console.log(libraryFine(1, 1, 2016, 31, 12, 2015)); // Output: 10000  
console.log(libraryFine(1, 1, 2015, 1, 1, 2015));   // Output: 0  

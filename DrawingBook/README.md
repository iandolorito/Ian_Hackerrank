# DRAWING BOOK

- Explanation  
This function pageCount(n, p) finds the least number of page turns to reach a page in a book. Here, n is the total number of pages in the book, and p is the page you want to reach. It first checks from the front by dividing p by 2, since each turn flips two pages. Then it checks from the back by subtracting the front turns from the total possible turns, which is n / 2. Finally, it returns the smaller value between the two, giving the minimum page turns needed.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(pageCount(6, 2)); // Output: 1  
console.log(pageCount(5, 4)); // Output: 0  
or input any number of pages and the page you want to turn to
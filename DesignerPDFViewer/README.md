# DESIGNER PDF VIEWER

- Explanation 
This function finds the highlighted area of a word in a PDF viewer.
It checks the tallest letter in the word using the given heights,
then multiplies that height by the word’s length to get the area.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
console.log(designerPdfViewer(
  [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 
  "zaba"
)); // Output: 28  

console.log(designerPdfViewer(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], 
  "abc"
)); // Output: 9  

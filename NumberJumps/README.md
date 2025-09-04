# NUMBER JUMPS KANGAROO

- Explanation
This function checks if two kangaroos starting at different positions but jumping at different speeds will land on the same spot after the same number of jumps. First, it looks at the case where both kangaroos jump at the same speed. If they also start in the same place, they will always meet, so it returns "YES"; otherwise, they will never meet, so it returns "NO." If their speeds are different, the function calculates how many jumps it would take for them to meet. If the result is a whole positive number, it means they will land together at some point, so it returns "YES." If not, it returns "NO."

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE 
    console.log(kangaroo(0, 3, 4, 2));
or input a number you you want
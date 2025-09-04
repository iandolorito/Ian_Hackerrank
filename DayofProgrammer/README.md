# DAY OF PROGRAMMER

- Explanation  
This function finds the date of the 256th day of the year in Russia, known as the Day of the Programmer. If the year is 1918, Russia switched calendars and February had only 15 days, so the date is 26.09.1918. If the year is a leap year, the date is 12.09.[year], where leap years are decided by two rules: before 1918 (Julian calendar) a year is leap if divisible by 4, and after 1918 (Gregorian calendar) a year is leap if divisible by 400 or divisible by 4 but not by 100. If it is not a leap year, the date is 13.09.[year]. The function checks the year, applies the correct rule, and returns the right date.

- HOW TO TEST THE FUNCTION

- WRITE THIS IN THE CONSOLE  
    console.log(dayOfProgrammer(2017));  
or input a year you want
function dayOfProgrammer(year) {
    // Julian calendar (1700-1917) leap year if divisible by 4
    // Gregorian calendar (1919+) leap year if divisible by 400 or divisible by 4 and not by 100
    // 1918 transition year (Feb had only 15 days)
    let day;
    if (year === 1918) {
        day = 26; // Special case: 256th day is 26th September
    } else if ((year < 1918 && year % 4 === 0) ||(year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))) {
        day = 12; // Leap year
    } else {
        day = 13; // Not a
    }
    return `${day}.09.${year}`;
}


function findDigits(n) {
    let count = 0;
    let numberString = n.toString();

    for (let i = 0; i < numberString.length; i++) {
        let digit = parseInt(numberString[i]);
        if (digit !== 0 && n % digit === 0) {
            count++;
        }
    }

    return count;
}

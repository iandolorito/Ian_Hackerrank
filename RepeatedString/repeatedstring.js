function repeatedString(s, n) {
    let count = 0;
    for (let char of s) {
        if (char === 'a') count++;
    }

    let fullRepeats = Math.floor(n / s.length);
    let total = fullRepeats * count;

    let remainder = n % s.length;
    for (let i = 0; i < remainder; i++) {
        if (s[i] === 'a') total++;
    }

    return total;
}

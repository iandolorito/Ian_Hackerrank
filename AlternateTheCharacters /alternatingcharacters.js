function alternatingCharacters(s) {
    let count = 0;
    let letters = '';

    for (let char of s) {
        if (char === letters) {
            count++;
        } else {
            letters = char;
        }
    }

    return count;
}

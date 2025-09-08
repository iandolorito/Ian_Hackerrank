function camelcase(s) {
    let count = 1; // Start with 1 to count the first word
    for (let char of s) {
        if (char >= 'A' && char <= 'Z') {
            count++;
        }
    }   
    return count;
}
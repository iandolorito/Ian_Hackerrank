function fairRations(B) {
    let count = 0;
    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 !== 0) {
            B[i]++;
            B[i + 1]++;
            count += 2;
        } 
    }   
    if (B[B.length - 1] % 2 !== 0) {
        return "NO";
    }else {
        return count;
    }
}

function viralAdvertising(n) {
    let shared = 5;
    let liked = 0;
    let total = 0;

    for (let i = 0; i < n; i++) {
        liked = Math.floor(shared / 2);
        total += liked;
        shared = liked * 3;
    }

    return total;
}

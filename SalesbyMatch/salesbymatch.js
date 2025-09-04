function sockMerchant(n, ar) {
    let pairs = 0;
    let sockCount = {};

    for (let i = 0; i < n; i++) {
        let color = ar[i];
        sockCount[color] = (sockCount[color] || 0) + 1;

        if (sockCount[color] % 2 === 0) {
            pairs++;
        }
    }
    return pairs;
}
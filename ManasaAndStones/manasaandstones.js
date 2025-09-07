function stones(n, a, b) {
    let results = new Set();
    for (let i = 0; i <= n - 1; i++) {
        let total = a * (n - 1 - i) + b * i;
        results.add(total);
    }
    return Array.from(results).sort((x, y) => x - y);
        
}
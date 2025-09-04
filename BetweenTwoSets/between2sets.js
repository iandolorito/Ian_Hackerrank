function getTotalX(a, b) {
    let fset = Math.max(...a);
    let sset = Math.min(...b);
    let count = 0;

    for (let i = fset; i <= sset; i++) {
        let isFactorOfI = a.every(num => i % num === 0);
        let isFactorOfB = b.every(num => num % i === 0);

        if (isFactorOfI && isFactorOfB) {
            count++;
        }
    }
    return count;
}
function minimumDistances(a) {
    let minDist = Infinity;

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                minDist = Math.min(minDist, j - i);
            }
        }
    }

    if (minDist === Infinity) {
        return -1;
    } else {
        return minDist;
    }
}

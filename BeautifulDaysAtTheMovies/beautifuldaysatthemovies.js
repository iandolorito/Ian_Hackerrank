function beautifulDays(i, j, k) {
    let count = 0;
    for (let day = i; day <= j; day++) {
        let rev = Number(String(day).split('').reverse().join(''));
        if (Math.abs(day - rev) % k === 0) {
            count++;
        }
    }
    return count;
}

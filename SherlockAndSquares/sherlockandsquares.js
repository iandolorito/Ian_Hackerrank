function squares(a, b) {
    let count = 0;

    for (let i = a; i <= b; i++) {
        let root = Math.sqrt(i);
        if (Number.isInteger(root)) {
            count++;
        }
    }

    return count;
}

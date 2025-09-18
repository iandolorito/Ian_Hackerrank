function circularArrayRotation(a, k, queries) {
    let newa = [];
    for (let i = 0; i < k; i++) {
        a.unshift(a.pop());
    }
    for (let index of queries) {
        result.push(a[index]);
    }
    return newa;
}

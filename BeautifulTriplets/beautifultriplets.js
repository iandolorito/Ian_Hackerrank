function beautifulTriplets(d, arr) {
    let count = 0;
    let set = new Set(arr);

    for (let num of arr) {
        if (set.has(num + d) && set.has(num + 2 * d)) {
            count++;
        }
    }
    return count;
}

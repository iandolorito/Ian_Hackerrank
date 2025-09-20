function gemstones(arr) {
    let common = new Set(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let current = new Set(arr[i]);
        common = new Set([...common].filter(c => current.has(c)));
    }

    return common.size;
}

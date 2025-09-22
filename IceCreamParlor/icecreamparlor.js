function icecreamParlor(m, arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let diff = m - arr[i];
        if (map[diff] !== undefined) {
            return [map[diff] + 1, i + 1];
        }
        map[arr[i]] = i;
    }
}

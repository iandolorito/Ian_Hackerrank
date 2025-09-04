function migratoryBirds(arr) {
    let counts = {};
    let max = 0;
    let min = Infinity;

    for (let type of arr) {
        counts[type] = (counts[type] || 0) + 1;
        if (counts[type] > max || (counts[type] === max && type < min)) {
            max = counts[type];
            min = Number(type);
        }
    }
    return min;
}


function cutTheSticks(arr) {
    let result = [];

    while (arr.length > 0) {
        result.push(arr.length);

        let minVal = Math.min(...arr);
        arr = arr.map(x => x - minVal).filter(x => x > 0);
    }

    return result;
}

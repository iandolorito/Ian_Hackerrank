function equalizeArray(arr) {
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (count[num]) {
            count[num]++;   
        } else {
            count[num] = 1;
        }
    }

    let maxFreq = 0;
    for (let key in count) {
        if (count[key] > maxFreq) {
            maxFreq = count[key];
        }
    }

    return arr.length - maxFreq;
}

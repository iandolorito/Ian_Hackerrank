function countingValleys(steps, path) {
    let valleys = 0;
    let altitude = 0;

    for (let i = 0; i <= steps; i++) {
        if (path[i] === 'U') {
            altitude++;
        }
        else {
            altitude--;
        }

        if (altitude === 0 && path[i] === 'U') {
            valleys++;
        }else {
            continue;
        }
    }

    return valleys;
}
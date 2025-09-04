function kangaroo(x1, v1, x2, v2) {
    // check if both kangaroos have the same speed
    if (v1 === v2) {
        if (x1 === x2) {
            return "YES";
        } else {
            return "NO";
        }
    }

    // calculate number of jumps
    let n = (x2 - x1) / (v1 - v2);

    // if n is a positive whole number, they land at the same spot
    if (n >= 0 && n % 1 === 0) {
        return "YES";
    } else {
        return "NO";
    }
}


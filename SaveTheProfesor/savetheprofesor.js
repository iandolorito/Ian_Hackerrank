function saveThePrisoner(n, m, s) {
    let saved = (s + m - 1) % n;
    if (saved === 0) {
        return n;
    } else {
        return saved;
    }
}

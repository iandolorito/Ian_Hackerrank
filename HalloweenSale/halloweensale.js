function howManyGames(p, d, m, s) {
    let games = 0;

    while (s >= p) {
        s -= p;
        games++;
        p = Math.max(m, p - d);
    }

    return games;
}

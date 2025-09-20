function funnyString(s) {
    let n = s.length;
    let r = s.split("").reverse().join("");

    for (let i = 1; i < n; i++) {
        let diff1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        let diff2 = Math.abs(r.charCodeAt(i) - r.charCodeAt(i - 1));
        if (diff1 !== diff2) {
            return "Not Funny";
        }
    }
    return "Funny";
}

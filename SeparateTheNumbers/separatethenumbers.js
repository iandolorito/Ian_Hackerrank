function separateNumbers(s) {
    let n = s.length;

    for (let len = 1; len <= Math.floor(n / 2); len++) {
        let firstNum = BigInt(s.substring(0, len));
        let num = firstNum.toString();
        let next = firstNum;

        while (num.length < n) {
            next = next + 1n; // BigInt addition
            num += next.toString();
        }

        if (num === s) {
            console.log("YES " + firstNum);
            return;
        }
    }

    console.log("NO");
}

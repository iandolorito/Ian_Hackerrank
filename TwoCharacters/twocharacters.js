function alternate(s) {
    let maxLen = 0;
    const UChars = [...new Set(s)];

    for (let i = 0; i < UChars.length; i++) {
        for (let j = i + 1; j < UChars.length; j++) {
            const filtered = s.split('').filter(
                c => c === UChars[i] || c === UChars[j]
            );
            let valid = true;
            for (let k = 1; k < filtered.length; k++) {
                if (filtered[k] === filtered[k - 1]) {
                    valid = false;
                    break;
                }
            }
            if (valid && filtered.length > maxLen) {
                maxLen = filtered.length;
            }
        }
    }
    return maxLen;
}
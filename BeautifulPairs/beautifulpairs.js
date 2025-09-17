function beautifulPairs(A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let j = B.indexOf(A[i]);
        if (j !== -1) {
            count++;
            B[j] = -1;
        }
    }

    if (count < A.length) {
        return count + 1;
    } else {
        return count - 1;
    }
}

  

function weightedUniformStrings(s, queries) {
    let weights = [];
    let count = 0;
    let pchar = ' ';

    for (let char of s) {
        if (char === pchar) {
            count = count + 1;
        } else {
            count = 1;
        }
        pchar = char;
        weights.push((char.charCodeAt(0) - 96) * count);
    }

    let results = [];
    for(let q of queries){
          if(weights.includes(q)){
                    results.push("Yes");
          }else{
                    results.push("No");
          }
    }
    return results;
}

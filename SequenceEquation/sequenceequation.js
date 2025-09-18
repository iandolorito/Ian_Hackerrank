function permutationEquation(p) {
    let sequence = [];
    for (let i = 1; i <= p.length; i++) {
        let y = p.indexOf(i) + 1;
        let z = p.indexOf(y) + 1;
        sequence.push(z);
    }
    return sequence;
}

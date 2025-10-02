function taumBday(b, w, bc, wc, z) {
    let costBlack = Math.min(bc, wc + z);
    let costWhite = Math.min(wc, bc + z);
    let result = BigInt(b) * BigInt(costBlack) + BigInt(w) * BigInt(costWhite);
   return result;
}

function bonAppetit(bill, k, b) {
    let total = bill.reduce((sum, cost) => sum + cost, 0);
    let AnnaShare = (total - bill[k]) / 2;

    if (b === AnnaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - AnnaShare);
    }
}

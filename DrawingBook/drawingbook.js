function pageCount(n, p) {

    let Frontpage = Math.floor(p / 2);

    let Backpage = Math.floor(n / 2) - Frontpage;

    let result = Math.min(Frontpage, Backpage);
    return result;
}
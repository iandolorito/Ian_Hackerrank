function pickingNumbers(a) {
    let Maxlength = 0;
    let Count = new Array(100).fill(0);

    for (let num of a) {
        Count[num]++;
    }   
    for (let i = 1; i < Count.length; i++) {
        let Currentlength = Count[i] + Count[i - 1];
        if (Currentlength > Maxlength) {
            Maxlength = Currentlength;
        }else{
            continue;
        }
    }
    return Maxlength;   

}
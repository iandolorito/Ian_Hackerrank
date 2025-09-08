function hurdleRace(k, height) {
    let MaxHeight = Math.max(...height);
    let jump = MaxHeight - k;

    if(jump > 0){
        return jump;
    }else{
        return 0;
    }
}
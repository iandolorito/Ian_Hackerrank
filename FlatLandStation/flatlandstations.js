function flatlandSpaceStations(n, c) {
    let Maxdistance = 0;
    for (let i = 0; i < n; i++) {
        let Mindistance = Infinity; 
        for (let j = 0; j < c.length; j++) {
            let distance = Math.abs(i - c[j]);
            if (distance <  Mindistance) {
                 Mindistance = distance;
            } 
        }
        if ( Mindistance > Maxdistance) {
            Maxdistance =  Mindistance;
        } 
    }
    return Maxdistance; 

}
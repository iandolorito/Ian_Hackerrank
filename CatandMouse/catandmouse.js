function catAndMouse(x, y, z) {
    let distanceA = Math.abs(z - x);
    let distanceB = Math.abs(z - y);

    if (distanceA < distanceB){
        return 'Cat A';
    } else if (distanceB < distanceA) {
        return 'Cat B';
    }else {
        return 'Mouse C';
    }
}

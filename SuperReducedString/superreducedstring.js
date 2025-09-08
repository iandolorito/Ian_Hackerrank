function superReducedString(s) {
    let pairs = [];
    for(let char of s){
        if(pairs.length && pairs[pairs.length - 1] === char){
            pairs.pop(char);
        }else{
            pairs.push(char);
        }
    }
    let result = pairs.join('');
    
    if(result === ''){
        return 'Empty String';
    }else{
        return result;
    }
    
}

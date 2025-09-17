function angryProfessor(k, a) {
    let ontime = 0;
    for (let time of a) {
        if (time <= 0) ontime++;
    }
   if(ontime >= k){
       return "NO";
    }else{
       return "YES";
    }
}

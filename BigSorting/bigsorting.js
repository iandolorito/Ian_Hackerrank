function bigSorting(unsorted){     
  let sorted = unsorted.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);         
    } else {
      return a.length - b.length;         
    }     
  });     
  return sorted; 
}

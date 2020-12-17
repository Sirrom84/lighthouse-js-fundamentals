function range(start, end, step) {
  let result = [];
  if (start === undefined || end === undefined || step === undefined || end < start || step < 0) {
    return result;
  }else {

    for (start; start <= end; start += step) {
      result.push(start);
   
    }
  }
  return result; 
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
const finalPosition = function (moves) {
  let result = [0,0];
  for (let x = 0; x < moves.length; x++)  {
    console.log(moves[x])
    console.log(result);
    if (moves[x] === 'north'){
        result[1]++;
    } else if (moves[x] === 'south') {
      result[1]--;
    } else if (moves[x] === 'west') {
      result[0]--;
    } else if (moves[x] === 'east') {
      result[0]++;
    } 
  }
  console.log(result);
  return result;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);
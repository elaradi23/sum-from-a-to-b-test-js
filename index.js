
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if(fromN > toN){
    return 0;
  }

  return fromN + sum(fromN + 1, toN);
}

module.exports = sum;

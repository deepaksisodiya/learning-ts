// typescript unioun types

function combine(input1: number | string, input2: number | string) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combineNumbers = combine(10, 20);
console.log(combineNumbers);

const conbineNames = combine('deepak', 'sisodiya');
console.log(conbineNames);

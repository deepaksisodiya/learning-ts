// typescript litral types

function combine(input1: number | string, input2: number | string, resultConversionType: 'as-number' | 'as-string') {
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversionType === 'as-number') {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combineNumbers = combine(10, 20, 'as-number');
console.log(combineNumbers);

const conbineN = combine('10', '20', 'as-number');
console.log(conbineN);

const conbineNames = combine('deepak', 'sisodiya', 'as-string');
console.log(conbineNames);

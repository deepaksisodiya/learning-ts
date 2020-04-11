// typescript type alises
function combine(input1, input2, resultConversionType) {
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversionType === 'as-number') {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combineNumbers = combine(10, 20, 'as-number');
console.log(combineNumbers);
var conbineN = combine('10', '20', 'as-number');
console.log(conbineN);
var conbineNames = combine('deepak', 'sisodiya', 'as-string');
console.log(conbineNames);

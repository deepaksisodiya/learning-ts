// typescript unioun types
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combineNumbers = combine(10, 20);
console.log(combineNumbers);
var conbineNames = combine('deepak', 'sisodiya');
console.log(conbineNames);

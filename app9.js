// typescript Function type
function add(n1, n2) {
    return n1 + n2;
}
// let combineValues: Function;
var combineValues;
// combineValues = 5; this will give error
combineValues = add;
combineValues(8, 8);

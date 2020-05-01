// typescript Function type
function add(n1, n2) {
    return n1 + n2;
}
// let combineValues: Function;
var combineValues;
// combineValues = 5; this will give error
combineValues = add;
combineValues(8, 8);
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(8, 8, function (sum) {
    console.log(sum);
});

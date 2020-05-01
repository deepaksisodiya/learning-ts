// typescript Function type

function add(n1: number, n2: number) {
  return n1 + n2;
}

// let combineValues: Function;
let combineValues: (a1: number, a2: number) => number;
// combineValues = 5; this will give error

combineValues = add;

combineValues(8, 8);

function addAndHandle(n1: number, n2: number, cb: (a1: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(8, 8, (sum) => {
  console.log(sum);
});

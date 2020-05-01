// typescript Function type

function add(n1: number, n2: number) {
  return n1 + n2;
}

// let combineValues: Function;
let combineValues: (a1: number, a2: number) => number;
// combineValues = 5; this will give error

combineValues = add;

combineValues(8, 8);

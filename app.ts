function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 10;

console.log(add(number1, number2));

/*
const n1 = 5;
typescript does type inference and know the type of n1 is number only
so we need not to do this in typescript
const n1: number = 5;
*/

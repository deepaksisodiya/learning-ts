// typescript unknown type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'input';

if (typeof userInput === 'string') {
  userName = userInput
}

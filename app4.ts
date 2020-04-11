// typescript tuple type

const Person4: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Deepak',
  age: 30,
  hobbies: ['Cooking', 'Coding'],
  role: [2, 'author']
}

/*
here role is of type tuple
can have lenght of 2 and first value should be number and second is string
*/

// Person4.role[1] = 10; gives ERROR
// Person4.role = [2, 'author', 'admin']; gives Error

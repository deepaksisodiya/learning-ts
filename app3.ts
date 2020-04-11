// typescript array type

const Person3 = {
  name: 'Deepak',
  age: 30,
  hobbies: ['Cooking', 'Coding']
};

/*
typescript does type infernece and know that hobbies is of type array of string
*/

let activity: string[];
activity = ['Cooking', 'Coding'];

for (const hobby of Person3.hobbies) {
  console.log(hobby.toUpperCase());
  // due to type inference vs code know that you can perform all string oepration on hobby
  // console.log(hobby.map()); // gives an ERROR because map is not performed on hobby of type string
}

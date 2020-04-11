/*
typescript does type inference to know about the type of object property
here typescript know that name has type string and age has type number
so Person.job gives error/warning that this key does not exist in Person object
*/
const Person2 = {
  name: 'Deepak',
  age: 30
}

console.log(Person2.name);

// typescript enums

/*
there are 3 types of role we have in our app
admin of value 0
reader of value 1
author of value 2
*/

enum Role { ADMIN, READER, AUTHOR };

const Person5 = {
  name: 'Deepak',
  age: 30,
  role: Role.ADMIN
}

console.log(Person5.role);

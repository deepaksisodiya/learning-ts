// typescript enums
/*
there are 3 types of role we have in our app
admin of value 0
reader of value 1
author of value 2
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READER"] = 1] = "READER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Person5 = {
    name: 'Deepak',
    age: 30,
    role: Role.ADMIN
};
console.log(Person5.role);

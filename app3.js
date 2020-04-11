// typescript array type
var Person3 = {
    name: 'Deepak',
    age: 30,
    hobbies: ['Cooking', 'Coding']
};
/*
typescript does type infernece and know that hobbies is of type array of string
*/
var activity;
activity = ['Cooking', 'Coding'];
for (var _i = 0, _a = Person3.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // due to type inference vs code know that you can perform all string oepration on hobby
    // console.log(hobby.map()); // gives an ERROR because map is not performed on hobby of type string
}

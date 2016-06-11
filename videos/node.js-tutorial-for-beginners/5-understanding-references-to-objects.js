var person1 = {
    firstName: 'dream',
    lastName: 'apple',
    age: 22
};
var person2 = person1;

person2.age = 23;

console.log(person1.age);

// == & ===

console.log(19 == '19'); // true
console.log(19 === '19'); // false
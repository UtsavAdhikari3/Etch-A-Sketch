let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let nameArr = [];

users.forEach((name)=>nameArr.push(name.name))

console.log(nameArr);
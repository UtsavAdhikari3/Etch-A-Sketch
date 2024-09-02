let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((name)=>{
    return myObj = {
        fullName : `${name.name} ${name.surname}`,
        id : name.id,
    }
})

console.log(usersMapped);
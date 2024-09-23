let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr){
    let average = 0;
    const lengthOfArr = arr.length;
    arr.forEach(element => {
        average = average + element.age;
    });
    return average/lengthOfArr;
}

console.log(getAverageAge(arr))




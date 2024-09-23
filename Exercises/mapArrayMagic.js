const myArray = [1,2,3,4,5,6];


const tripleArray = myArray.map((item)=> item * 3);

let sum = 0;

tripleArray.map((item)=>{
    if(item % 2 === 0){
        sum = sum + item;
    }
})

console.log(sum)
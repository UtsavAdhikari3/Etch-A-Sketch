
let tripleArray = [];
let sum = 0;
let noSum = 0;

function sumOfTripledEvens(arr){
    arr.forEach(element => {
        let triple = element * 3;
        tripleArray.push(triple);
    });
    tripleArray.forEach(item => {
        if (item % 2 === 0){
            sum = sum + item
        }
        else{
            noSum = noSum + item;
        }
    })
    return sum;
}


console.log(sumOfTripledEvens([12,2,3,4,5]));
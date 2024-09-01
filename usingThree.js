const myArr = [1,2,3,4,5,6];

const tripledArr = myArr.map((item=>item * 3));

const evenArr = tripledArr.filter((item=>item % 2 === 0))

const sumArr = evenArr.reduce((accumulator,initialValue)=>{
    return accumulator + initialValue
})

console.log(sumArr);
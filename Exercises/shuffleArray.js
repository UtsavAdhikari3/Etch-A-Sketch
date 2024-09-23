// My Code 

// let randomArray = [];


// function shuffle(arr){
//     for(let i = 0; i<= arr.length; i++){
//         var item = arr[Math.floor(Math.random() * arr.length)];
//         const index = arr.indexOf(item);
//         randomArray.push(item);
//         if(index > -1){
//             arr.splice(index, 1);
//         }
//     }
//     return randomArray;
// }


// let arr = [1,2,3,4]

// console.log(shuffle(arr))

//Solution
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [1, 2, 3];
  shuffle(arr);
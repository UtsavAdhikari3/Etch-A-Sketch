function toSort(arr){
    let sortedArray = arr.sort((a,b) => a-b)
    return sortedArray.reverse();
}

console.log(toSort([1,10,3,2,20,31]))
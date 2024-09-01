function filterRange(arr, a, b){
    let filteredArray = arr.filter(element => element >= a && element <=b)
    return filteredArray;
}

console.log(filterRange([5, 3, 8, 1], 1, 4));
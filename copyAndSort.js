function copySort(arr){
    let copy = arr.slice().sort();
    return copy
}

let arr = ["HTML", "JavaScript", "CSS"];
console.log(copySort(arr))
console.log(arr);
function myFilter(arr, a, b) {
    return arr.filter((element) => element >= a && element <= b);
}

console.log(myFilter([5, 3, 8, 1], 1, 4)); // Output: [3, 1]

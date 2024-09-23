function unique(arr) {
    let storeArr = [];
    arr.forEach(element => {
        if(storeArr.includes(element) === false){
            storeArr.push(element);
        }
    });
    return storeArr;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  console.log(unique(strings));
  
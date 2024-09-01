function camelize(str){
    const splitStr = str.split("-");
    const result = splitStr.map((word,index)=>{
        if(index === 0){
            return word;
        }
        else{
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    })
    return result.join("");
}


console.log(camelize("my-back-color"))
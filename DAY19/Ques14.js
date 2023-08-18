const arr = [2,5,67,1,45]
const newarr = arr.reduce((acc , value ) => {
    if(acc > value){
        return acc
    }else{
        return value
    }
})
console.log(newarr);
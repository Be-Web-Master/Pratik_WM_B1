function binarySearch(arr ,searchValue){
    let leftPointer = 0;
    let rightPointer = arr.length-1;
    let midPointer = Math.floor((leftPointer+rightPointer)/2);
    
    while(arr[midPointer] !== searchValue && arr[leftPointer] <arr[rightPointer]){   
    if(arr[midPointer] < searchValue){
        leftPointer=midPointer+1;
    }else{
        rightPointer = midPointer;
        }
        midPointer = Math.floor((leftPointer+rightPointer)/2);
    }
    if(arr[midPointer] === searchValue){
       return midPointer;
    }

    return -1;
}
console.log(binarySearch([23,34,37,43,65,67,69,71,73,75,76,78,79],43));

// function myMap(arr ,callBack , thisArg){
//     // if(!arr || !Array.isArray(arr)){
//     //     return new Error(`not an array`)
//     // }
//     // if(!callBack || typeof callBack !== 'function'){
//     //     return new Error(`${callBack} is not a function`)
//     // }
    
//     const resultArr =[];
//     for(let i=0 ; i<arr.length ; i++){
//         const arrElem = callBack(arr[i] , i ,arr)
//         resultArr.push(arrElem)
//     }
//     return resultArr
// }
// const callFunc = (el ,idx ,arr) => {
// return el ** idx + arr.length;
// } 
// console.log(myMap([2,4,6,8],callFunc))

//Filter()   function

// function myfilt(arr ,callBack , thisArg){
//     const resultArr =[];
//     for(let i=0 ; i<arr.length ; i++){
//         const arrElem = callBack(arr[i] , i ,arr);
//         if(arrElem) resultArr.push(arr[i])
//         // resultArr.push(arrElem)
//     }
//     return resultArr
// }
// const callFunc = (el ,idx ,arr) => {
// return el > 7
// }
// console.log(myfilt([9,6,7,8],callFunc))

//      Foreach-----

// const arr = [1,2,4];
// arr.forEach(element => {
//    console.log(element*2)
// });

// function myforEach(arr ,callBack , thisArg){
//     if(!arr || !Array.isArray(arr)){
//         return new Error(`not an array`)
//     }
//     if(!callBack || typeof callBack !== 'function'){
//         return new Error(`${callBack} is not a function`)
//     } 
//     for(let i=0 ; i<arr.length ; i++){
//          callBack(arr[i] , i ,arr)
        
//     }
// myforEach([1,2,3] , ele =>{
//     console.log(ele *2)
// })

//Reduce()  ----function
//const accVal = [1,2,3,4].reduce((acc , ele , idx ,arr) initval)


// function myReduce (arr , cB , initValue , thisArg){
// let accToBe , startidx;
//     if(initValue){
//         if(!arr.length) return initValue
//         accToBe = initValue
//         startidx = 0
//     }
//     if(!initValue === undefined && !arr.length) return new Error(`cannot run without intivalue`)
//     if(!initValue === undefined && arr.length){
//         accToBe = arr[0]
//         startidx = 1
//     }

//     for(let i=startidx ; i<arr.length ; i++){
//         accToBe= cB(accToBe, acc[i] , i ,arr)
//     }
//     return accToBe
// }
// const callFunc = (accToBe , el , startidx ,arr)

// console.log(myReduce([1,2,3,4] , callFunc))
//      MAP
// const map = new Map();
// const character ={
//     firstName : "Prateek" ,
//     lastName : "Sanodiya"
// }
// const nmap = new Map(Object.entries(character))

// nmap.set('age', 46)
// //nmap.get('name')
// nmap.set('name' , 'sujal')
// nmap.delete('firstName')

// // nmap.has('name')
// console.log(nmap.has('prateek'))

//      SET

// const set = new Set();
// set.add('a')
// set.add(13)
// set.add('A')
// //set.delete(13)
// //let ex = set.values()
// //console.log(ex.next().value)
// console.log(set)

// const str = 'qwertyuiopasdfghjklzxcvbnMmPHJG  HJGUYG'

// // console.log(str.toUpperCase());
// //const set = new Set(str);
// const lower = str.replaceAll(" " ,"").toLowerCase()
// const newStr = new Set(lower)
// console.log(newStr)


// const calculateArea = function(radius){
//     let pi = Math.PI;
//     radius = radius ** 2
//     let area = pi**radius
//     console.log(area)
// }
// // calculateArea(5)

// const calculateMeanAndMode = function(arr){
//     for(let i=0 ; i<arr.length ; i++){
//         arrSum = arr[i] + arr[i+1]
//     }
//     let mean = arrSum /arr.length
//     console.log(mean)
// }
// calculateMeanAndMode([1, 3 ,6 ,7])


// Bubble_sort
// const arr =[13,86,46,24,65,34,24];
// for(let i=0 ; i<arr.length ; i++){
//     for(let j=0 ; j<arr.length ; j++){
//         if(arr[i] < arr[j]){
//             let temp = arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)

//const arr =[13,86,46,24,65,34,24];


//const BubbleSort =(arr)=>{
// let length = arr.length;
// for(let i=0 ; i<length ; i++){
//     for(let j=0 ; j<length ; j++){
//         if(arr[i] > arr[j]){
//             let temp = arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)
//}


// const selectionSort =(arr) =>{
// let length = arr.length;
// for(let i=0 ; i<length ;i++){
//     let minIndex = i;
//     let temp = arr[i]

//     for(let j=i+1 ; j<length ; j++){
//         if(arr[j] < arr[minIndex]){
//             minIndex=j
//         }
//     }
//      arr[i]=arr[minIndex]
//     arr[minIndex] = temp
//     //console.log(arr)
// }
// console.log(arr)
// }
// selectionSort(arr)

// const insertionSort = function (arr){
//     let n = arr.length;
//     for(let i=1 ; i<n ; i++){
//         let current = arr[i]
//         let j =i-1

//         while(j>=0 && arr[j] > current){
//             arr[j+1] = arr[j]
//             j--
//             //console.log(arr)
//         }
//         arr[j+1] =current
        
//     }
//     console.log(arr)
// }
// insertionSort(arr)

const arr =[6,8,11,9,3,5,15,1];
const Map =arr.map(num => [num]);

function mergeSorted(arr1,arr2){
   let idx1 = 0 , idx2 = 0 , resultArr=[];
   if(arr1[idx1]  > arr2[idx2]){
    resultArr.push(arr2[idx2])
        if(arr2.length-1 !== idx2){
        ++idx2
        }
    else{
        resultArr.push(arr1.slice(idx1)) 
        }
    }   
    else{
    resultArr.push(arr1[idx1])
        if(arr2.length-1 !== idx1){
        ++idx1
        }
        else{
        resultArr.push(arr2.slice(idx2))
        }
     }
}
//for(){}


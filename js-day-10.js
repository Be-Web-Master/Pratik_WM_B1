//const arr = [9,8,95,[45,[3,5,6],4,2],56,77,[3,6,8]];
//const arr = [{name : "prateek" , marks: 90},
//{name:"sujal", marks:30},{name:"Pinkesh", marks:2}];
// const map = arr.map((element) =>element *2)
// console.log(map)


//  slice - new array return
// const newArr = arr.slice(1,3);
// console.log(newArr);
 
//      splice - modified array 
// const newArr = arr.splice(2,2,6,8,9);
// console.log(arr);

// indexOf - 

// const newArr = arr.indexOf(4 ,4)
// console.log(newArr);

// .join

//const newArr = arr.join("-")

//includes
//const newArr = arr.includes(7)

//.sort()
//  const newArr = arr.sort((a,b) => a-b) (ascending)
//const newArr = arr.sort((a,b) => b-a)  //(deascending)
// const newArr = arr.sort((a,b)=>{
//     if(a>b){
//         return -1;
//     }else if (b>a){
//         return 1
//     }else{
//         return 0
//     }
// }
// )

// filter()
//const newArr = arr.filter((element) => element>8)

//.map()
//const newArr = arr.map((element) => element **2)


// const newArr = arr.map((element) => {
//     if(element > 5){
//         return element
//     }else{
//         return ''
//     }
// })  OR
// const newArr = arr.map((element) => {
//     return element >5 ? element : ''})
// const newArr = arr.forEach((element) => {
//     return element **2
// })

// .find
//const greaterNum = arr.find((element) => element > 9)

//.findLast
//const greatlast = arr.findLast((element) => element >9)

//      findIndex()
//const greatlast = arr.findIndex((element) => element >100)


//      findLastIndex()

//const greatlast = arr.findLastIndex((element) => element >90)


//      some()
//const greatlast = arr.some((element) => element === 77)

//      .every()
//const greatlast = arr.every((element) => element < 100)

//      array.reverse()
//const greatlast = arr.reverse()

//      flat()
//const greatlast = arr.flat()

//      flatMap()

// const newArr = arr.flatMap((element) => {
//     if(typeof element === "number"){
//         return element**2
//     }else{
//         return element
//     }
// })
// console.log(newArr)

// const greatlast = arr.flatMap
// console.log(greatlast)

//.foreach
// let newStud =[]
// const newArr = arr.forEach((arr) => {
//     if(arr.marks > 33){
//         newStud.push({name: arr.name,
//             marks: arr.marks,
//             status : "Pass"
    
//         }
//         )
//     }else{
//         newStud.push({name: arr.name,
//             marks: arr.marks,
//             status : "fail",
//             failmarks :33 - arr.marks
//         })
//     }
// })
// console.log(newStud)

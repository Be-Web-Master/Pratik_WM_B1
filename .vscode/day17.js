// const obj = {
//     name : 'Prateek Sanodiya',
//     rollNumber : 70,
//     class : 9,
//     section : 'A',
//     gender : 'Male',
//     country : 'India'
// }

// const obj1= { name: 'Deepak' ,gender: 'female'};
// const obj2= {section: 'B' , gender: 'Male'}
// const obj3= { country: 'India'}
// for (const key in obj) {  //keys of the given object
//     console.log(key)
// }

//console.log(Object.key(obj)); //keys of the given object
//console.log(Object.values(obj));  //values of the given object
// console.log(Object.entries(obj));  //Both values and keys of the given object
// const mergeobj = Object.assign(obj1,obj2,obj3);
// console.log(mergeobj)


// const object1 ={name : 'Prateek' , gender: 'Male',
//     printIntroduction : function(){
//         console.log(`My name is ${this.name} and gender ${this.gender} and age is ${this.age} class is ${this.class}`)
//     },
// }
// const std1 = Object.create(object1)
//     std1.age = 21
//     std1.class = 7
//     std1.printIntroduction()

//ques6
// const object1 ={name : 'Prateek' , age :21}
// Object.defineProperty(object1, 'class',{
//     value:12,
//     writable : true
// })
// console.log(object1)

//ques7
// const object1 = { name : 'Prateek' , age : 18};
// const object2 = {class : 9 , gender :'male'};
//     Object.defineProperties(object1,{
//         "age":{ value : 45,
//             writable : true},
//         "address":{ value : "Bhopal",
//             writable : true}
//     })
//     console.log(object1)

//ques8
// const object1 = { name : 'Prateek' , age : 18};
//     Object.preventExtensions(object1)
//     Object.defineProperties(object1,{
//         "age":{ value : 45,
//             writable : true},
//         "address":{ value : "Bhopal",
//             writable : true}
//     })
//     console.log(object1)

//Ques9
const object1 = { name : 'Prateek' , age : 18};
Object.seal(object1)

    Object.defineProperties(object1,{
        "age":{ value : 45,
            writable : true},
        "address":{ value : "Bhopal",
            writable : true}
    })
    console.log(object1)

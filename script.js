const bt = document.getElementById("btn")

bt.addEventListener("click", ()=>{fetch('https://jsonplaceholder.typicode.com/todos').then((response)=> response.json()).then((data)=> console.log(data))
})

// const fetchData = async(API)=>{
//     const response = await fetch(API)
//     const data = await response.json()
//     console.log(data)
// }




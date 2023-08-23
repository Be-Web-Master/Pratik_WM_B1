const btn = document.getElementById("btn")

// .addEventListener("sumbit" , ()=> {})


// fetchData()
const handleFormSubmit = async(event) => {
    event.preventDefault();
    const input = document.getElementById("number").value
    if(number.value >200 || number.value <1){
        console.log("please enter your right id")
    }

    const card = document.getElementById("card")


const response = await fetch('https://jsonplaceholder.typicode.com/todos/'.concat(""+input))
const data = await response.json()
console.log(data);
card.innerHTML = `<p><strong>${data.id}</strong> ${data.title}</p>`
}

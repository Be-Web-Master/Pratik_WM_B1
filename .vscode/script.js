let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let age = document.getElementById("age")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let male = document.getElementById("male")
let female = document.getElementById("female")
let error = document.getElementsByTagName("p")[0]
console.log(error);
const errorHanding = (input) => {
    if(input === "age" && age.value <18){
        error.innerText = "age should be 18"
    }else if(input ==="phone" && phone.value.length < 10 ){
        error.innerText = "phone number should be required is 10"
    }else if(input === "firstName" && firstName.value >5){
    error.innerText = "char is morethan 5"
    }
    else if(input === "lastName" &&lastName.value >5){
    error.innerText = "char is morethan 5"
    }
    else{
        error.innerText=""
    }
};
let submit = document.getElementById("sumbit")
submit.addEventListener("click" ,()=>{
    submit.innerText ="submitted"
})
const handleForm = (event)=>{
    event.preventDefault();
    
}
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let age = document.getElementById("age")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let male = document.getElementById("male")
let female = document.getElementById("female")
let errorMessage = document.getElementsByTagName("p")[0]
console.log(errorMessage);
const vaildateInput =(input) => {
    //console.log(input);
    if(input === "age" && age.value < 18){
        errorMessage.innerText ="age should be greater 18";
    }else if(input === "phone" && phone.value.length !==10){
        errorMessage.innerText ="phone number should have 10"
    }else{
        errorMessage.innerText = " ";
    }
};

const handleFormSumbit = (event) => {
    event.preventDefault();
    console.log({
        firstName:firstName.value,
        lastName: lastName.value,
        age:age.value,
        email:email.value,
        phone:phone.value,
        gender: male.checked ? "male" :"female"
    });
}



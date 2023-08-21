const input = document.getElementById("txt")
input.addEventListener("focus" ,()=> {
    input.style.borderColor = "red"
    console.log(input.style.borderColor);
})
console.log(input);
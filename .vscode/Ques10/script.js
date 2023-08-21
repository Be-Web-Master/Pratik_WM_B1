const dv = document.getElementById("div")
dv.style.height="100vh"
dv.style.width ="100vw"
dv.addEventListener("contextmenu" , ()=>{
    dv.style.backgroundColor = "red"
    console.log(dv.style.backgroundColor);
})
console.log(dv);


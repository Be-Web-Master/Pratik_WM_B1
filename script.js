const idInput = document.getElementById("idInput")
const todoList = document.getElementById("todoList")
const submitBtn = document.getElementById("submitBtn")
const searchInput = document.getElementById("searchInput")

const todoLiData =[]

const clearTodoList = ()=>{
    todoList.innerHTML ='';
}

const updateTodoList = ()=>{
    clearTodoList()
    for(let i=0 ; i<todoLiData.length ; i++){
        const liTagElement = document.createElement("li")
        liTagElement.innerText = todoLiData[i];
        todoList.append(liTagElement);
    }
}

const GET_URL =(idInputVal) => `https://jsonplaceholder.typicode.com/todos/${idInputVal}`

const addLiElement = (liText) =>{
    const liTagElement = document.createElement("li");
   liTagElement.innerText =liText;
   todoList.append(liTagElement);
}

const getApiData =async(URL)=>{
    const response = await fetch(URL)
   const data = await response.json();
   return data;
}

const handleAddTaskSubmit = async(event) =>{
    event.preventDefault();
   const idInputVal = idInput.value;
    if(idInputVal ==='' || idInputVal <= 0 || idInputVal > 200){
    alert('Enter a vaild id')
     submitBtn.innerText ="Add"
    return;
    }
   submitBtn.innerText="Adding"
   const todoData = await getApiData(GET_URL(idInputVal))
   if(!todoData.title){
    alert('failed to get data!')
   }
   addLiElement(todoData.title);
   todoLiData.push(todoData.title)
   
   idInput.value ='';
   submitBtn.innerText ="Add"
   console.log(todoList.innerHTML);
}
console.log(todoLiData);
const handleSearchInput =(event) =>{
    const searchVal = event.target.value;
    searchArr(searchVal)
}

const searchArr = (searchVal) =>{
    clearTodoList()
    todoLiData.forEach((element) => {
       if(element.includes(searchVal)) {
        addLiElement(element)
       }
    });
}
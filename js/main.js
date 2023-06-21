let inputText = document.querySelector("#input-text")
let place = document.querySelector(".place")
let done = document.querySelectorAll(".fa-check")
let box = document.querySelectorAll(".box")
let inputBtn = document.querySelector("#input-btn")
let checkBtn = document.querySelectorAll(".fa-xmark")


let todoText
let arrayOfTask = []

inputBtn.addEventListener("click",()=>{
  if (inputText.value !== "" && inputText.value != undefined){
    
    todoText = inputText.value
    inputText.value = ""
    loadTodo(todoText)
    addTask()
    
  }
  
});

function loadTodo(name){
  let task = {
    title:name,
    id: Date.now(),
    complate:false
  }
  
  arrayOfTask.push(task)
  
};
function addTask(){
  place.innerHTML = ""
  
  arrayOfTask.forEach((todo)=>{
    // Creating Elements 
    let box = document.createElement("div")
    let check = document.createElement("div")
    let checkBtn = document.createElement("i")
    let h4 = document.createElement("h4")
    
    let icon = document.createElement("i")
    
    // Adding Elements
    box.appendChild(h4).innerHTML = todo.title
    box.appendChild(check).className = "check"
    box.setAttribute("data-id", todo.id)
    check.appendChild(icon).className = "fa-solid fa-check"
    check.appendChild(checkBtn).className = "fa-solid fa-xmark dele"
    place.appendChild(box).className = "box"
    // Remove Task
    checkBtn.addEventListener("click", ()=>{
      delTaskWith(h4.parentElement.getAttribute("data-id"));
      h4.parentElement.remove()
    })
    
    // Check The Task
    icon.addEventListener("click", ()=>{
      console.log("hi");
      box.classList.add("complate")
    })
    
   })
};
function delTaskWith(taskId){
  arrayOfTask = arrayOfTask.filter((task) => task.id != taskId);
}
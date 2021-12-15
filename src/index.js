document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDoList(e.target['new-task-description'].value, e.target['dueDate'].value)
    form.reset()
    sortThingsOut();
  })
  
});

  function buildToDoList(todo, dueDate){
  let li = document.createElement("li")
  li.textContent = `${todo} by ${dueDate}`;
  const priority = document.getElementById('priority') 
  li.id = priority.value
  if (li.id === "1"){
    li.style.color = "#a61c7c"
  }
  else if (li.id === "2"){
    li.style.color = "#1215b5"
  }
  else if (li.id === "3"){
    li.style.color = "#027d31"
  }
  let btn = document.createElement('button')
  btn.textContent = 'X'
  btn.addEventListener('click', handleDelete)
    li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

const todos = document.getElementById("tasks")
const editBtn = document.getElementById("edit-button")
const doneBtn = document.getElementById("done-editing")

editBtn.addEventListener("click", () => {
  todos.contentEditable = true;
  todos.style.backgroundColor = "#dddbdb"
 })

doneBtn.addEventListener("click", () => {
  todos.contentEditable = false;
  todos.style.backgroundColor = "#fcfafc"
})

function sortThingsOut(){
  let listOfNodes = document.getElementById("tasks").querySelectorAll('li')
  let arrayOfTasks = []
  for (i = 0; i < listOfNodes.length; i++){
    arrayOfTasks.push(listOfNodes[i])
  }
   arrayOfTasks.sort((firstTask, secontTask)=> firstTask.id - secontTask.id)
   console.log(arrayOfTasks)
   todos.innerHTML = '' 
    arrayOfTasks.forEach(ele => todos.appendChild(ele))
   }
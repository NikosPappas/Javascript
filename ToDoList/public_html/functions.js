const taskInput = document.getElementById('taskInput');
const taskList  = document.getElementById('taskList');

function addTask(){
    let li=document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li);
    taskInput.value='';
    li.addEventListener('click',completeTask);
    let deleteButton=document.createElement('button');
    deleteButton.textContent='Delete';
    deleteButton.addEventListener('click',deleteTask);
    li.appendChild(deleteButton);
    let newCheckBox=document.createElement("INPUT");
    newCheckBox.setAttribute("type","checkbox");
    newCheckBox.setAttribute("id",'checkBox');
    newCheckBox.addEventListener('click',()=>{
       if(newCheckBox.checked===true){
          window.alert("Task Completed");
      }
    });
    li.appendChild(newCheckBox);
}

function completeTask(event){
    const task=event.target;
    task.classList.toggle('completed');
}
function deleteTask(event){
    const task=event.target.parentElement;
    taskList.removeChild(task);
}
function checked(event){
    const task=event.target.parentElement;
  
    
}
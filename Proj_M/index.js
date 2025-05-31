const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const completedcounter = document.getElementById("completed-counter");
const uncompletedcounter = document.getElementById("uncompleted-counter");

function addTask(){
    const task = inputbox.Value.trim();

    if(!task){
        alert("enter the text");
        return;
    }
    createlist(task);
    
    //creation and updation is mandatory if the condiition fails 
}

function createlist(task){
    const li = document.createElement("li");
    li.classList.add("task");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = task;
    label.appendChild(checkbox);
    label.appendChild(span);
    li.appendChild(label);

const editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.classList.add("edit-btn");

const deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete";
deleteBtn.classList.add("delete-btn");
li.appendChild(editBtn);
li.appendChild(deleteBtn);
listcontainer.appendChild(li);

checkbox.addEventListener("click", function(){
    li.classList.toggle("completed",checkbox.checked);

    // call the update function
});

editBtn.addEventListener("click", function(){
    const updatetask = prompt("edit :", span.textcontent);
    if(updatetask!== null){
        span.textContent = updatetask;
         li.classList.remove("completed");
      checkbox.checked = false;
    }

})

deleteBtn.addEventListener("click", function(){
    if (confirm("Are you sure you want to delete this task?")){
        li.remove();

    }
    });
}

function update(task){
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTask = document.querySelectorAll("li:not(.completed)").length;


}
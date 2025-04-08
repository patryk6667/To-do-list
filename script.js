const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const todoList = document.getElementById("todoList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement("li");

  const taskNode = document.createTextNode(taskText);
        li.appendChild(taskNode);

   const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => li.remove();
        li.appendChild(deleteButton);

     li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

   todoList.appendChild(li);
  taskInput.value = "";
    }
}

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
  

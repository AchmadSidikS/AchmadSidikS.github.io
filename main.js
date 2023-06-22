function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    var newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value;
    
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = function() {
      editTask(this);
    };
    newTask.appendChild(editButton);
  
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
  
  function editTask(editButton) {
    var task = editButton.parentNode;
    var taskText = task.firstChild;
    var newText = prompt("Enter new task:", taskText.nodeValue);
    
    if (newText !== null && newText !== "") {
      taskText.nodeValue = newText;
    }
  }
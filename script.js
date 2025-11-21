let tasks = [];

function Task() {
  const taskInput = document.getElementById("todoInput").value;
  if (taskInput === "") return;

  const newTask = { text: taskInput, complete: false };
  addTaskFromStorage(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("todoInput").value = "";
}

window.onload = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach((task) => {
    addTaskFromStorage(task);
  });
};

function addTaskFromStorage(task) {
  const index = tasks.length;
  tasks.push(task);

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    tasks[index].complete = checkbox.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const span = document.createElement("span");
  span.textContent = task.text;

 const DeleteButton = document.createElement("button");
 DeleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>';
 DeleteButton.className = "delete-Button";
 DeleteButton.onclick = () => {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("todoListe").removeChild(li);
 }

  if (task.complete) {
    checkbox.checked = true;
  }

  li.appendChild(checkbox);
  li.appendChild(span);
li.appendChild(DeleteButton);

  const todoList = document.getElementById("todoListe");
  todoList.appendChild(li);
}



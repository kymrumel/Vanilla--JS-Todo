let todoInput = document.querySelector(".todo-input");
let todoBtn = document.querySelector(".todo-btn");
let todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteChecked);
function addTodo(event) {
     event.preventDefault();
     let todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");

     let newTodo = document.createElement("li");
     newTodo.innerHTML = todoInput.value;
     newTodo.classList.add("todo-item");
     todoDiv.appendChild(newTodo);

     let completeButton = document.createElement("button");
     completeButton.innerHTML = `<i class="fas fa-check"></i>`;
     completeButton.classList.add("complete");
     todoDiv.appendChild(completeButton);

     let deleteButton = document.createElement("button");
     deleteButton.innerHTML = `<i class = "fas fa-trash"></i>`;
     deleteButton.classList.add("trash");
     todoDiv.appendChild(deleteButton);

     todoList.appendChild(todoDiv);
     todoInput.value = " ";
}
function deleteChecked(e) {
     let item = e.target;
     if (item.classList[0] === "trash") {
          let todo = item.parentElement;
          todo.classList.add("fall");
          // todo.remove()
     }

     if (item.classList[0] === "complete") {
          let todo = item.parentElement;
          todo.classList.toggle("complete");
     }
}

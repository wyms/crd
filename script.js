// Get the todo form and list elements
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

// Load the todos from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Render the todos in the list
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTodo(index);
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

// Add a new todo to the list
function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todo = todoInput.value.trim();
  if (todo) {
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
    renderTodos();
  }
}

// Delete a todo from the list
function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// Add an event listener to the todo form
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

// Render the initial todos
renderTodos();

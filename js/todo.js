const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY = "todos";
const todos = [];
const savedTodos = localStorage.getItem(TODOS_KEY)


function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function onTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    paintTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
}

function onDeleteButtonClicked(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo;
    button.innerText = "x";

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
    button.addEventListener("click", onDeleteButtonClicked);
}

todoForm.addEventListener("submit", onTodoSubmit);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
}
"use strict";
const task = document.querySelector(".task");

const addBtn = document.querySelector(".add-button");

const addList = document.querySelector(".list-box");

////////Event Listeners//////
document.addEventListener("DOMContentLoaded", getTodos);
addBtn.addEventListener("click", addingTask);
addBtn.addEventListener("dblclick", removeTasks);
addList.addEventListener("click", deleteCheck);

function addingTask(e) {
  // Prevent form from submitting//
  e.preventDefault();

  task.focus();
  if (!task.value) return;
  let inn = task.value;

  /////TO-DO DIV//////
  const contain = document.createElement("div");
  contain.classList.add("list");

  ///creating list-field//////
  const todoDiv = document.createElement("div");
  todoDiv.innerText = inn;
  todoDiv.classList.add("task-name");
  todoDiv.classList.add("box");
  contain.append(todoDiv);

  /// ADD TO LOCAL STORAGE///
  setLocalStorage(inn);
  ///create check box////
  const checkBtn = document.createElement("button");
  checkBtn.classList.add("check-box");
  todoDiv.classList.add("box");
  checkBtn.innerText = "✓";
  contain.appendChild(checkBtn);

  ///create delete box////
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  todoDiv.classList.add("box");
  delBtn.innerText = "X";
  contain.appendChild(delBtn);

  /////APENDING TO THE HTML//////
  addList.appendChild(contain);

  //Clear Todo Input value//
  task.value = "";
}

function deleteCheck(e) {
  // console.log(e.target);
  const item = e.target;
  // console.log(item);

  //////DELETE BTN/////
  if (item.classList[0] === "delete") {
    // contain.remove();
    const todo = item.parentElement;
    //ANIMATION//
    removeTasks(todo);
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  /////CHECK BTN////////
  if (item.classList[0] === "check-box") {
    item.classList.toggle("hidden");
    const i = item.previousElementSibling;
    i.classList.toggle("complete");
  }
}

//////////working with local storage/////////

//SETTING LOCALSTORAGE//
function setLocalStorage(todo) {
  // Checking the history value
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//GETTING LOCALSTORAGE//
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    /////TO-DO DIV//////
    const contain = document.createElement("div");
    contain.classList.add("list");

    ///creating list-field//////
    const todoDiv = document.createElement("div");
    todoDiv.innerText = todo;
    todoDiv.classList.add("task-name");
    todoDiv.classList.add("box");
    contain.append(todoDiv);

    ///create check box////
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-box");
    todoDiv.classList.add("box");
    checkBtn.innerText = "✓";
    contain.appendChild(checkBtn);

    ///create delete box////
    const delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    todoDiv.classList.add("box");
    delBtn.innerText = "X";
    contain.appendChild(delBtn);

    /////APENDING TO THE HTML//////
    addList.appendChild(contain);
  });
}

//CLEARING ALL TASKS//
function removeTasks(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

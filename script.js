"use strict";
const task = document.querySelector(".task");

const addBtn = document.querySelector(".add-button");

const addList = document.querySelector(".li");

addBtn.addEventListener("click", () => {
  if (!task.value) return;
  console.log(task.value);
  const inn = task.value;
  task.value = null;

  const html = `<div class="list">
  <button class="check-box box"></button>
  <div class="task-name box"> ${inn}</div>
  <button class="delete box">X</button>
</div>`;

  //   addList.innerHTML += html;
  addList.insertAdjacentHTML("afterend", html);
});

// function del() {

//   document.querySelector(".delete").addEventListener("click", () => {
//     addList.querySelector(".list").style.display = none;
//   });
// }
// del()

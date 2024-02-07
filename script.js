let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.map((item, index) => {
  const task_list = document.getElementById("task__list");
  let task = add(index, item);
  task_list.append(task);
});

document.getElementById("form").addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const task_list = document.getElementById("task__list");
  const input_task = document.getElementById("inputText");

  let tsk = input_task.value;
  input_task.value = ``;
  let task = add(tasks.length, tsk);

  tasks.push(tsk);
  task_list.append(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function add(id, tsk) {
  let task = document.createElement("li");
  task.setAttribute("id", "task" + id);

  let div = document.createElement("div");
  div.classList.add("task");

  let inp = document.createElement("input");
  inp.setAttribute("type", "checkbox");

  let p = document.createElement("p");
  p.innerText = tsk;

  div.append(inp);
  div.append(p);

  let i = document.createElement("i");
  i.setAttribute("id", id);
  i.classList.add("fa-regular");
  i.classList.add("fa-trash-can");
  i.addEventListener("click", function (event) {
    document.getElementById("task" + event.target.id).remove();
    tasks.splice(event.target.id, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  task.append(div);
  task.append(i);

  return task;
}

const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleTask(this)">${input.value}</span>
    <div>
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;

  list.appendChild(li);
  input.value = "";
}

function toggleTask(el) {
  el.classList.toggle("done");
}

function deleteTask(el) {
  el.parentElement.parentElement.remove();
}

function editTask(el) {
  const span = el.parentElement.previousElementSibling;
  const newText = prompt("Edit task:", span.innerText);

  if (newText) {
    span.innerText = newText;
  }
}
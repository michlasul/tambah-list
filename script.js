const todoList = [];
const form = document.forms["todoForms"];

function clearTodoList() {
  const boxIdea = document.getElementById("boxIdea");
  while (boxIdea.firstChild) {
    boxIdea.removeChild(boxIdea.firstChild);
  }
}

function removeElement(i) {
  todoList.splice(i, 1);
  displayElements();
}

function displayElements(i) {
  clearTodoList();

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const tr = document.createElement("div");
    const td = document.createElement("h1");
    const tdButton = document.createElement("button");

    tdButton.textContent = "Done";

    tr.setAttribute(
      "class",
      "bg-emerald-500 px-3 py-2 mb-3 flex justify-between items-center rounded-md text-white"
    );
    td.textContent = todo;
    tdButton.setAttribute(
      "class",
      "py-2 px-6 rounded-md bg-emerald-600 text-emerald-50"
    );
    tr.appendChild(td);
    tr.appendChild(tdButton);

    const boxIdea = document.getElementById("boxIdea");
    boxIdea.appendChild(tr);

    tdButton.onclick = function () {
      removeElement(i);
    };
  }
}

form.onsubmit = function (event) {
  event.preventDefault();
  const todo = document.getElementById("input").value;
  todoList.push(todo);

  form.reset();

  console.info(todoList);
  displayElements();
};

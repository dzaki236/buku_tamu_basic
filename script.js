const Tamu = [];

function clearTamu() {
  const TamuBody = document.getElementById("TamuBody");
  while (TamuBody.firstChild) {
    TamuBody.removeChild(TamuBody.firstChild);
  }
}

function removeTamu(index) {
  Tamu.splice(index, 1);
  displayTamu();
}

function addTamu(index, todo) {
  const tr = document.createElement("tr");
  const tdButton = document.createElement("td");
  tr.appendChild(tdButton);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Keluar";
  buttonDone.onclick = function () {
    removeTamu(index);
  };
  tdButton.appendChild(buttonDone);

  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);

  const TamuBody = document.getElementById("TamuBody");
  TamuBody.appendChild(tr);
}

function displayTamu() {
  clearTamu();

  for (let i = 0; i < Tamu.length; i++) {
    const todo = Tamu[i];

    const searchText = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      addTamu(i, todo);
    }
  }
}

document.forms["todoForm"].onsubmit = function (event) {
  event.preventDefault();

  const todo = document.forms["todoForm"]["todo"].value;
  Tamu.push(todo);

  document.forms["todoForm"].reset();

  console.info(Tamu);
  displayTamu();
};

const searchInput = document.getElementById("search");
searchInput.onkeyup = function () {
  displayTamu();
};
searchInput.onkeydown = function () {
  displayTamu();
};

displayTamu();

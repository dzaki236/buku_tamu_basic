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

function addTamu(index, Tamu) {
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

  const tdTamu = document.createElement("td");
  tdTamu.textContent = Tamu;
  tr.appendChild(tdTamu);

  const TamuBody = document.getElementById("TamuBody");
  TamuBody.appendChild(tr);
}

function displayTamu() {
  clearTamu();

  for (let i = 0; i < Tamu.length; i++) {
    const Tamu = Tamu[i];

    const searchText = document.getElementById("search").value.toLowerCase();

    if (Tamu.toLowerCase().includes(searchText)) {
      addTamu(i, Tamu);
    }
  }
}

document.forms["TamuForm"].onsubmit = function (event) {
  event.preventDefault();

  const Tamu = document.forms["TamuForm"]["Tamu"].value;
  Tamu.push(Tamu);

  document.forms["TamuForm"].reset();

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

let title = document.querySelector(".title");
let items = [];
let turn = "x";
function EndGame(n1, n2, n3) {
  title.innerHTML = `${items[n1]} winner`;
  document.getElementById("item" + n1).style.background = "#000";
  document.getElementById("item" + n2).style.background = "#000";
  document.getElementById("item" + n3).style.background = "#000";

  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}
function winnner() {
  for (let i = 1; i < 10; i++) {
    items[i] = document.getElementById("item" + i).innerHTML;
  }
  if (items[1] == items[2] && items[2] == items[3] && items[1] != "") {
    EndGame(1, 2, 3);
  } else if (items[4] == items[5] && items[6] == items[5] && items[4] != "") {
    EndGame(4, 5, 6);
  } else if (items[7] == items[8] && items[9] == items[7] && items[7] != "") {
    EndGame(7, 8, 9);
  } else if (items[1] == items[4] && items[7] == items[1] && items[1] != "") {
    EndGame(1, 4, 7);
  } else if (items[2] == items[5] && items[8] == items[2] && items[2] != "") {
    EndGame(2, 5, 8);
  } else if (items[3] == items[6] && items[9] == items[6] && items[3] != "") {
    EndGame(3, 6, 9);
  } else if (items[1] == items[5] && items[9] == items[5] && items[5] != "") {
    EndGame(1, 5, 9);
  } else if (items[3] == items[5] && items[7] == items[5] && items[5] != "") {
    EndGame(3, 5, 7);
  }
}

function game(id) {
  let el = document.getElementById(id);
  if (turn === "x" && el.innerHTML == "") {
    el.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (turn === "o" && el.innerHTML == "") {
    el.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x";
  }
  winnner();
}

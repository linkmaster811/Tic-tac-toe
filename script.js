const form = document.querySelector("#myForm")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  document.querySelector(".modal-wrapper").setAttribute("Hidden", true);
  initalizeGame(data);
})

const initalizeVariables = (data) => {
  data.choice = +data.choice;
    data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    data.player1 = "X";
    data.player2 = "O";
    data.round = 0;
    data.currentPlayer = "X";
    data.gameOver = false;
}

const addEventListenersToGameBoard = (data) => {
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", (event) => {
      playMove(event.target, data);
    });
  });
}

const initalizeGame = (data) => {
  initalizeVariables(data);
  addEventListenersToGameBoard(data);
}

const playMove = (box,data) => {
  if(data.gameOver) {
    return;
  }

  if(data.board[box.id] === "X" || data.board[box.id] === "O"){
    return;
  }

  data.board[box.id] = data.currentPlayer
  box.textContent = data.currentPlayer;
  box.className = data.currentPlayer === "X" ? "box player1" : "box player2"
  
}
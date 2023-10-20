const form = document.querySelector("#myForm")

const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

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
  if(data.gameOver || data.round > 8) {
    return;
  }

  if(data.board[box.id] === "X" || data.board[box.id] === "O"){
    return;
  }

  data.board[box.id] = data.currentPlayer
  box.textContent = data.currentPlayer;
  box.classList.add(data.currentPlayer === "X" ? "player1" : "player2");

  data.round++;

  if(endConditions(data)){

  }
  
};

const endConditions = (data) => {
  if(checkWinner(data)){
    return true
  } else if (data.round === 9){
    return true
  }
  return false
};

const checkWinner = (data) => {
  let result = false;
  winningConditions.forEach(condition => {
    if(data.board[condition[0]] === data.board[condition[1]] && data.board[condition[1]] === data.board[condition[2]]){
      data.gameOver = true;
      result = true;
    }

  })
  return result;
}
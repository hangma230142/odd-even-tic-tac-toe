const socket = io();
const boardDiv = document.getElementById("board");
let playerRole = null;

socket.on("playerRole", (role) => {
  playerRole = role;
  document.getElementById("role").innerText = `You are the ${role.toUpperCase()} player`;
});

socket.on("roomFull", () => {
  alert("Room is full! Only 2 players allowed.");
});

socket.on("boardUpdate", (board) => {
  renderBoard(board);
});

function renderBoard(board) {
  boardDiv.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      // hiển thị số chẵn/lẻ thay vì O/E
      if (board[i][j] === 1) cell.textContent = getRandomOdd();
      else if (board[i][j] === 2) cell.textContent = getRandomEven();
      else cell.textContent = "";

      cell.onclick = () => makeMove(i, j);
      boardDiv.appendChild(cell);
    }
  }
}

// Sinh số lẻ hoặc chẵn ngẫu nhiên
function getRandomOdd() {
  const odds = [1, 3, 5, 7, 9];
  return odds[Math.floor(Math.random() * odds.length)];
}
function getRandomEven() {
  const evens = [2, 4, 6, 8];
  return evens[Math.floor(Math.random() * evens.length)];
}

function makeMove(row, col) {
  if (playerRole) socket.emit("makeMove", { row, col });
}

// Nút Restart
document.getElementById("restartBtn").onclick = () => {
  socket.emit("restartGame");
};

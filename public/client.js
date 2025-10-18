const socket = io();

socket.on("connect", () => {
  console.log("Connected:", socket.id);
  updateStatus("Connected! Waiting for another player...");
});

socket.on("playerRole", (role) => {
  playerRole = role;
  document.getElementById("role").textContent = `You are the ${role.toUpperCase()} player`;
});

socket.on("roomFull", () => {
  alert("Room is full! Only 2 players allowed.");
  updateStatus("Room is full!");
});

socket.on("gameState", ({ board: newBoard, turn }) => {
  board = newBoard;
  currentTurn = turn;
  renderBoard();
  if (turn === playerRole) {
    updateStatus(`Your turn (${playerRole.toUpperCase()} player)`);
  } else {
    updateStatus(`Waiting for the ${turn.toUpperCase()} player...`);
  }
});

socket.on("invalidMove", (msg) => {
  alert(msg);
});

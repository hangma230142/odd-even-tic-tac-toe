import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let board = Array(5).fill().map(() => Array(5).fill(0));
let players = [];
let currentTurn = "odd"; 

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  if (players.length < 2) {
    const role = players.length === 0 ? "odd" : "even";
    players.push({ id: socket.id, role });
    socket.emit("playerRole", role);
    socket.emit("boardUpdate", board);
  } else {
    socket.emit("roomFull");
    socket.disconnect();
    return;
  }

  socket.on("makeMove", ({ row, col }) => {
    const player = players.find((p) => p.id === socket.id);
    if (!player) return;
    if (player.role !== currentTurn) return;
    if (board[row][col] !== 0) return;

    board[row][col] = player.role === "odd" ? 1 : 2;

    currentTurn = currentTurn === "odd" ? "even" : "odd";

    io.emit("boardUpdate", board);
  });

  socket.on("restartGame", () => {
    board = Array(5).fill().map(() => Array(5).fill(0));
    currentTurn = "odd";
    io.emit("boardUpdate", board);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    players = players.filter((p) => p.id !== socket.id);

    board = Array(5).fill().map(() => Array(5).fill(0));
    io.emit("boardUpdate", board);
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

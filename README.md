# Odd-Even Tic Tac Toe (Multiplayer)

A fun twist on the classic Tic Tac Toe game — built with **Node.js**, **Socket.io**, and **HTML/CSS/JavaScript**.  
This version allows **two players** to compete online as the **Odd** or **Even** player on a 5x5 grid!

---

## Game Rules

- The board is **5×5** and starts with all cells set to `0`.
- The **Odd Player** can only place **odd numbers (1, 3, 5, 7, 9)**.
- The **Even Player** can only place **even numbers (2, 4, 6, 8)**.
- Players take turns clicking on empty cells to place their numbers.
- The game ends when:
  - A player forms a winning line (can be customized, e.g., sum rule or pattern), or
  - The board is full — resulting in a draw.

---

## Tech Stack

- **Frontend:** HTML, CSS, Vanilla JavaScript  
- **Backend:** Node.js with Express & Socket.io  
- **Real-time communication:** WebSocket (via Socket.io)

---

### Clone this repository
```bash
git clone https://github.com/hangma230142/odd-even-tic-tac-toe.git
cd odd-even-tic-tac-toe

**### Install dependencies**
npm install

**### Run the server**
node index.js


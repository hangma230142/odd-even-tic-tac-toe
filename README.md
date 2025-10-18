# Odd-Even Tic Tac Toe (Multiplayer)

A creative spin on the classic Tic Tac Toe game — developed as part of the Distributed Systems Assignment (Week 2) for Naver.
This project demonstrates real-time communication, state synchronization, and client-server interaction using Node.js, Express, and Socket.io.

## Assignment Overview

Context:
This assignment was given during the Naver Distributed Systems module to help students understand how real-time multiplayer systems work using WebSockets.

Objective:
Build a multiplayer game where two users connect from different clients and interact simultaneously through a shared game state managed by the server.

## Game Rules

The game board is a 5×5 grid, initialized with all cells set to 0.

There are two players:

🟥 Odd Player — can only place odd numbers (1, 3, 5, 7, 9).

🟦 Even Player — can only place even numbers (2, 4, 6, 8).

Players take turns clicking on empty cells to place their numbers.

The game ends when:

A player forms a winning pattern (customizable by sum or line rules), or

The board is full, resulting in a draw.

This setup demonstrates synchronization, message broadcasting, and state consistency across clients — all key topics in distributed system design.

## Tech Stack

Frontend: HTML, CSS, Vanilla JavaScript

Backend: Node.js (Express + Socket.io)

Communication Protocol: WebSocket (via Socket.io)

Architecture: Client–Server (real-time bi-directional data flow)

## Getting Started
### Clone this repository

git clone https://github.com/hangma230142/odd-even-tic-tac-toe.git

cd odd-even-tic-tac-toe

### Install dependencies
npm install

### Run the server
node index.js

### Open the game

Go to http://localhost:3000
in two browser windows or devices to play as Odd and Even players.

## Project Structure
odd-even-tic-tac-toe
├── index.js          # Server-side logic (Express + Socket.io)
├── public/
│   ├── index.html    # Frontend layout
│   ├── style.css     # UI design
│   └── script.js     # Client-side logic + socket communication
└── README.md

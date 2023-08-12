import patrol from "./assets/patrol.png";
import submarine from "./assets/submarine.png";
import destroyer from "./assets/destroyer.png";
import battleship from "./assets/battleship.png";
import carrier from "./assets/carrier.png";
import hit from "./assets/hit.png";
import miss from "./assets/miss.png";
import rotate from "./assets/rotate.png";

import Game from "./gameloop";

// import Icon from './icon.png';

// // // Add the image to our existing div.
// // const myIcon = new Image();
// // myIcon.src = Icon;

// // element.appendChild(myIcon)

let game = new Game();
game.init();
let shipsToPlace = [carrier, battleship, destroyer, submarine, patrol];
let shipsToPlaceString = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrol'];
let shipsPlaced = 0;
const horizontal = true;

const display1 = document.querySelector(".display1");
const display2 = document.querySelector(".display2");

function clearDisplay() {
    display1.textContent = '';
    display2.textContent = '';
}

function renderMarker(cell, playerBoard, coordinates) {
    const location = playerBoard[`${coordinates}`];
    const myIcon = new Image();
    const markerBox = document.createElement("div");
    // console.log(location);

    if (location === "hit" || location === "miss") {
        myIcon.classList.add("marker");
        markerBox.classList.add("marker-box");
        if (location === "miss") {
            myIcon.src = miss;
        } else {
            myIcon.src = hit;
        }
        cell.appendChild(markerBox);
        markerBox.appendChild(myIcon);
    }
}

function win(winner) {
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('hidden');
    
    const box = document.createElement('div');
    box.classList.add('winner');
    overlay.appendChild(box);

    const message = document.createElement('div');
    message.classList.add('message');
    if (winner === 'player') message.textContent = 'YOU WIN!!!';
    else message.textContent = 'BOT WINS :(';
    box.appendChild(message);

    const resetButton = document.createElement('button');
    resetButton.textContent = 'RESET';
    resetButton.classList.add('reset-button');
    box.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        reset();
        overlay.classList.add('hidden');
        overlay.textContent = '';
    });
}

function botAttack() {
    const coordinates = game.botMove("easy");
    const playerCell = document.querySelector(
        `.gameboard [data-row="${coordinates[1]}"][data-col="${coordinates[0]}"]`,
    );
    renderMarker(
        playerCell,
        game.player.board,
        `[${coordinates[0]},${coordinates[1]}]`,
    );
    if (game.checkWin("bot")) win('bot');
}

function renderShips(playerBoard, display) {
    const screen = display === 1 ? "display1" : "display2";
    const seen = {};
    // Check board for ships top to bottom left to right
    for (let row = 9; row >= 0; row--) {
        for (let col = 0; col < 10; col++) {
            const ship = playerBoard.board[`[${col},${row}]`];
            if (
                (ship === "patrol" ||
                    ship === "destroyer" ||
                    ship === "submarine" ||
                    ship === "battleship" ||
                    ship === "carrier") &&
                !seen[`${ship}`]
            ) {
                seen[`${ship}`] = true;
                const myIcon = new Image();
                const cell = document.querySelector(
                    `.${screen} .gameboard [data-row="${row}"][data-col="${col}"]`,
                );
                if (playerBoard.ships[`${ship}`].vertical === false)
                    myIcon.classList.add("horizontal");
                if (ship === "patrol") {
                    myIcon.src = patrol;
                    myIcon.classList.add("patrol");
                } else if (ship === "destroyer") {
                    myIcon.src = destroyer;
                    myIcon.classList.add("destroyer");
                } else if (ship === "submarine") {
                    myIcon.src = submarine;
                    myIcon.classList.add("submarine");
                } else if (ship === "battleship") {
                    myIcon.src = battleship;
                    myIcon.classList.add("battleship");
                } else {
                    myIcon.src = carrier;
                    myIcon.classList.add("carrier");
                }
                myIcon.classList.add("ship");
                cell.appendChild(myIcon);
                // console.log(ship, col, row);
            }
        }
    }
}

function attackCellListeners(cell) {
    cell.addEventListener("click", () => {
        const row = cell.getAttribute("data-row");
        const col = cell.getAttribute("data-col");
        const location = `[${col},${row}]`;
        if (
            game.enemy.board[`${location}`] !== "hit" &&
            game.enemy.board[`${location}`] !== "miss"
        ) {
            // Player attacks
            game.enemy.receiveAttack(`${location}`);
            renderMarker(cell, game.enemy.board, `${location}`);
            if (game.checkWin("player")) win('player');

            // Bot attacks after you
            botAttack();
        }
    });
}

function createRotateButton(parent) {
    const rotateButton = document.createElement('div');
    rotateButton.classList.add('rotate-button');

    const myIcon = new Image();
    myIcon.src = rotate;

    parent.appendChild(rotateButton);
    rotateButton.appendChild(myIcon);

    rotateButton.addEventListener('click', () => {
        const img = document.querySelector('.placement>.placement-img');
        if (game.player.ships[`${shipsToPlaceString[shipsPlaced]}`].vertical === false) {
            // Horizontal => vertical
            img.classList.remove('horizontal');
            game.player.ships[`${shipsToPlaceString[shipsPlaced]}`].vertical = true;
        } else {
            // Vertical => horizontal
            img.classList.add('horizontal');
            game.player.ships[`${shipsToPlaceString[shipsPlaced]}`].vertical = false;
        }
    });
}

function renderPlacement() {
    display2.textContent = '';

    const container = document.createElement('div');
    const placementBox = document.createElement('div');
    placementBox.classList.add('placement');
    const rotateButton = document.createElement('button');
    rotateButton.classList.add('rotate-button');
    
    const next = document.createElement('div');
    next.classList.add('next-ships');

    container.appendChild(placementBox);
    placementBox.appendChild(rotateButton);
    container.appendChild(next);
    display2.appendChild(container);



    // Reset content
    placementBox.textContent = '';
    createRotateButton(placementBox);
    next.textContent = '';

    // Render the next ship to place in the box
    const img = new Image();
    img.src = shipsToPlace.shift();
    img.classList.add('placement-img');
    if (horizontal) img.classList.add('horizontal');

    // Render the remaining ships below;
    if (shipsToPlace.length > 0) {
        shipsToPlace.forEach(ship => {
            const box = document.createElement('div');
            box.classList.add('next-box');
            const nextShips = new Image();
            nextShips.src = ship;
            nextShips.classList.add('placement-img');
            nextShips.classList.add('horizontal');
            if (ship === patrol) nextShips.classList.add("patrol");
            else if (ship === destroyer) nextShips.classList.add("destroyer");
            else if (ship === submarine) nextShips.classList.add("submarine");
            else if (ship === battleship) nextShips.classList.add("battleship");
            else nextShips.classList.add("carrier");

            box.appendChild(nextShips);
            next.appendChild(box);
        });
    }
    if (shipsPlaced < 5) placementBox.appendChild(img);
}

function reset() {
    game = new Game();
    game.init();
    clearDisplay();
    shipsToPlace = [carrier, battleship, destroyer, submarine, patrol];
    shipsToPlaceString = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrol'];
    shipsPlaced = 0;

    renderBoard(display1);
    renderPlacement();
    renderShips(game.player, 1);
}



function renderConfirmation() {
    display2.textContent = '';
    const box = document.createElement('div');
    box.classList.add('button-holder');
    const start = document.createElement('button');
    start.textContent = 'START';
    start.classList.add('start-button');
    const resetButton = document.createElement('button');
    resetButton.textContent = 'RESET'
    resetButton.classList.add('reset-button');

    box.appendChild(start);
    box.appendChild(resetButton);
    display2.appendChild(box);

    start.addEventListener('click', () => {
        clearDisplay(); 
        renderBoard(display1);
        renderBoard(display2);
        renderShips(game.player, 1);
    });

    resetButton.addEventListener('click', () => {
        reset();
    });
}

function placementCellListeners(cell) {
    cell.addEventListener("click", () => {
        const row = cell.getAttribute("data-row");
        const col = cell.getAttribute("data-col");
        const location = `[${col},${row}]`;

        // If you didn't already place all ships and the location is placeable => incriment counter, place the ship, render
        if (shipsPlaced < 5 && game.player.placeShip(shipsToPlaceString[shipsPlaced], `${location}`)) {
            shipsPlaced++;
            renderPlacement();
            renderShips(game.player, 1);
            if (shipsPlaced === 5) {
                renderConfirmation();
            };
        }
    });
}

function renderBoard(parent) {
    const board = document.createElement("div");
    board.classList.add("gameboard");
    parent.appendChild(board);
    for (let i = 9; i >= 0; i--) {
        const row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.setAttribute("data-row", i);
            cell.setAttribute("data-col", j);
            cell.classList.add("cell");
            row.appendChild(cell);
            if (parent === display2) attackCellListeners(cell);
            if (parent === display1) placementCellListeners(cell);
        }
    }
}

export default function renderUI() {
    renderBoard(display1);
    renderPlacement();
    renderShips(game.player, 1);
}

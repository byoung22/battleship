import Board from "./gameboard";

export default class Game {
    constructor() {
        this.player = new Board();
        this.enemy = new Board();
        this.turn = 0;
    }

    checkWin(player) {
        let win = true;
        if (player === "player") {
            // Check player win
            Object.keys(this.enemy.ships).forEach((ship) => {
                if (!this.enemy.ships[`${ship}`].sink) win = false;
            });
        } else {
            // Check bot win
            Object.keys(this.player.ships).forEach((ship) => {
                if (!this.player.ships[`${ship}`].sink) win = false;
            });
        }
        return win;
    }

    botMove(difficulty) {
        let row;
        let col;
        if (difficulty === "easy") {
            row = parseInt(Math.random() * 10, 10);
            col = parseInt(Math.random() * 10, 10);

            // Check if the bot already attacked the spot
            while (
                this.player.board[`[${col},${row}]`] === "hit" ||
                this.player.board[`[${col},${row}]`] === "miss"
            ) {
                row = parseInt(Math.random() * 10, 10);
                col = parseInt(Math.random() * 10, 10);
                // console.log(this.player.board[`[${col},${row}]`]);
            }
        }
        this.player.receiveAttack(`[${col},${row}]`);
        return [col, row];
    }

    placement() {
        Object.keys(this.enemy.ships).forEach((ship) => {
            let row = parseInt(Math.random() * 10, 10);
            let col = parseInt(Math.random() * 10, 10);
            const coinFlip = Math.random() < 0.5;
            this.enemy.ships[`${ship}`].vertical = coinFlip;
            let placement = this.enemy.placeShip(ship, `[${col},${row}]`);

            while (!placement) {
                // console.log(ship, row, col);
                row = parseInt(Math.random() * 10, 10);
                col = parseInt(Math.random() * 10, 10);
                placement = this.enemy.placeShip(ship, `[${col},${row}]`);
            }
        });
    }

    init() {
        this.player.init();
        this.enemy.init();
        this.placement();
        // console.log(this.player);
        // console.log(this.enemy);
    }
}

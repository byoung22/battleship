import Ship from "./shipCreator";

export default class Board {
    constructor() {
        this.board = {};
        this.ships = {};
    }

    placeShip(ship, coordinate) {
        const tmp = this.ships[`${ship}`];
        const parsedCoord = JSON.parse(coordinate);
        let row = parsedCoord[0];
        let col = parsedCoord[1];
        const placement = [];
        for (let i = 0; i < tmp.length; i++) {
            const cell = this.board[`[${row},${col}]`];
            if (cell === null) {
                placement.push(`[${row},${col}]`);
            } else {
                return false;
            }

            if (tmp.vertical) {
                col -= 1;
            } else {
                row += 1;
            }
        }

        placement.forEach((location) => {
            this.board[`${location}`] = tmp.name;
        });
        return true;
    }

    receiveAttack(coordinate) {
        // If the spot hasn't been attacked yet, it can fire
        const aim = this.board[`${coordinate}`];
        if (aim !== "hit" && aim !== "miss") {
            if (aim === null) {
                this.board[`${coordinate}`] = "miss";
            } else {
                // Assume its a ship
                this.ships[`${aim}`].isHit();
                this.board[`${coordinate}`] = "hit";
            }
        }
    }

    hasLost() {
        if (!this.ships.carrier.sink) return false;
        if (!this.ships.battleship.sink) return false;
        if (!this.ships.submarine.sink) return false;
        if (!this.ships.destroyer.sink) return false;
        if (!this.ships.patrol.sink) return false;
        return true;
    }

    init() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.board[`[${i},${j}]`] = null;
            }
        }

        this.ships.carrier = new Ship("carrier");
        this.ships.carrier.init();
        this.ships.battleship = new Ship("battleship");
        this.ships.battleship.init();
        this.ships.submarine = new Ship("submarine");
        this.ships.submarine.init();
        this.ships.destroyer = new Ship("destroyer");
        this.ships.destroyer.init();
        this.ships.patrol = new Ship("patrol");
        this.ships.patrol.init();
    }
}

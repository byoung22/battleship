export default class Ship {
    constructor(name) {
        this.name = name;
        this.length = null;
        this.hits = 0;
        this.sink = false;
        this.vertical = false;
    }

    getLength(name) {
        if (name === "carrier") this.length = 5;
        else if (name === "battleship") this.length = 4;
        else if (name === "submarine") this.length = 3;
        else if (name === "destroyer") this.length = 3;
        else if (name === "patrol") this.length = 2;
    }

    isHit() {
        this.hits++;
        this.isSunk();
    }

    isSunk() {
        if (this.hits === this.length) this.sink = true;
    }

    init() {
        this.getLength(this.name);
    }
}

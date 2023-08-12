import Board from "../gameboard";

let playerBoard = new Board();
playerBoard.init();
afterEach(() => {
    playerBoard = new Board();
    playerBoard.init();
});

test("Adds patrol ship", () => {
    playerBoard.placeShip("patrol", "[8,0]");
    expect(playerBoard.board["[8,0]"]).toBe("patrol");
});
test(`Won't add if out of bounds`, () => {
    playerBoard.placeShip("carrier", "[6,0]");
    expect(playerBoard.board["[7,0]"]).toBe(null);
});
test(`Won't add if it conflicts with another ship`, () => {
    playerBoard.placeShip("carrier", "[5,0]");
    playerBoard.placeShip("patrol", "[4,0]");
    expect(playerBoard.board["[4,0]"]).toBe(null);
});
test(`Will hit a ship`, () => {
    playerBoard.placeShip("carrier", "[5,0]");
    playerBoard.placeShip("patrol", "[4,1]");
    playerBoard.receiveAttack("[9,0]");
    expect(playerBoard.board["[9,0]"]).toBe("hit");
});
test(`Will incriment the hits on a ship object`, () => {
    playerBoard.placeShip("carrier", "[5,0]");
    playerBoard.placeShip("patrol", "[4,1]");
    playerBoard.receiveAttack("[9,0]");
    expect(playerBoard.ships.carrier.hits).toBe(1);
});
test(`Will sink a ship`, () => {
    playerBoard.placeShip("patrol", "[4,1]");
    playerBoard.receiveAttack("[4,1]");
    playerBoard.receiveAttack("[5,1]");
    expect(playerBoard.ships.patrol.sink).toBe(true);
});
test(`Will miss a ship`, () => {
    playerBoard.placeShip("carrier", "[5,0]");
    playerBoard.placeShip("patrol", "[4,1]");
    playerBoard.receiveAttack("[4,2]");
    expect(playerBoard.board["[4,2]"]).toBe("miss");
});
test(`Lost if all ships sunk`, () => {
    playerBoard.placeShip("carrier", "[0,1]");
    playerBoard.ships.carrier.sink = true;
    playerBoard.placeShip("battleship", "[0,2]");
    playerBoard.ships.battleship.sink = true;
    playerBoard.placeShip("submarine", "[0,3]");
    playerBoard.ships.submarine.sink = true;
    playerBoard.placeShip("destroyer", "[0,4]");
    playerBoard.ships.destroyer.sink = true;
    playerBoard.placeShip("patrol", "[0,5]");
    playerBoard.receiveAttack("[0,5]");
    playerBoard.receiveAttack("[1,5]");
    expect(playerBoard.hasLost()).toBe(true);
});

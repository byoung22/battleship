import Ship from "../shipCreator";

test("Ship gets hit", () => {
    const patrol = new Ship("patrol");
    patrol.init();
    patrol.isHit();
    expect(patrol.hits).toStrictEqual(1);
});

test("Ship is sunk", () => {
    const patrol = new Ship("patrol");
    patrol.init();
    patrol.isHit();
    patrol.isHit();
    expect(patrol.sink).toStrictEqual(true);
});

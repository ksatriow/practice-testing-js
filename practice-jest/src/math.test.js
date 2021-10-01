const mathOperations = require("../src/math");

describe("Math Test", () => {
  test("adding 4 + 2 should return 6", () => {
    // arrange and act
    var result = mathOperations.add(4, 2);

    // assert
    expect(result).toBe(6);
  });
  test("minus 4 - 2 should return 2", () => {
    // arrange and act
    var result = mathOperations.min(4, 2);

    // assert
    expect(result).toBe(2);
  });
  test("Multiply 4 * 2 should return 8", () => {
    // arrange and act
    var result = mathOperations.mul(4, 2);

    // assert
    expect(result).toBe(8);
  });
  test("Divide 4 / 2 should return 2", () => {
    // arrange and act
    var result = mathOperations.div(4, 2);

    // assert
    expect(result).toBe(2);
  });
});

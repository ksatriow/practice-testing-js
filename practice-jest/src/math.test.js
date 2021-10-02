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

  // equality matcher
  test("equality matchers", () => {
    expect(2 * 2).toBe(4);
    expect(4 - 2).not.toBe(1);
  });

  // even odd
  expect.extend({
    toBeDivisibleBy(received, argument) {
      const pass = received % argument == 0;
      if (pass) {
        return {
          pass: true,
          message: () =>
            `expected ${received} not to be divisible by ${argument}`,
        };
      } else {
        return {
          pass: false,
          message: () => `expected ${received} to be divisible by ${argument}`,
        };
      }
    },
  });

  test("even and odd numbers", () => {
    expect(100).toBeDivisibleBy(2);
    expect(101).not.toBeDivisibleBy(2);
  });

  // Rolls n virtual dice
  function rollDice(n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
      answer.push(Math.floor(Math.random() * 6 + 1));
    }
    return answer;
  }

  test("rollDice only returns valid numbers", () => {
    expect(rollDice(100)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });
});

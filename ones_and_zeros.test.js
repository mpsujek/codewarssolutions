const binaryArrayToNumber = require("./ones_and_zeros");

describe("binaryArrayToNumber", () => {
  test("When it gets array zeros and ones of should return decimal number", () => {
    expect(binaryArrayToNumber([0, 0, 0, 1])).toBe(1);
  });
  test("When it gets array zeros and ones of should return decimal number", () => {
    expect(binaryArrayToNumber([1, 1, 1, 1])).toBe(15);
  });
});

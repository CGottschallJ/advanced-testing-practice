import {add, subtract, multiply,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 5 from 7 and return 2", () => {
    expect(subtract(7, 5)).toBe(2);
  });
});


describe("multiply", () => {
  it("should multiply 3 and 4 and return 12", () => {
    expect(multiply(3, 4)).toBe(12);
  });
});


describe("divide", () => {
  it("should divide 6 into 18 and return 3", () => {
    expect(divide(18, 6)).toBe(3);
  });
});

import { sumArray, cloneAndModify, maxAndMinValue } from "./task123";

describe("Sum array", () => {
  it("return sum array", () => {
    expect(sumArray()).toEqual(55);
  });
});

describe("multi 2", () => {
  it("return multi 2", () => {
    expect(cloneAndModify()).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
});

describe("max and min", () => {
  it("return max and min", () => {
    const logSpy = jest.spyOn(console, "log");
    maxAndMinValue();
    expect(logSpy).toHaveBeenCalledWith(10, 1);
  });
});

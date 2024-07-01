import { isCircleInSquare } from "./task3";

describe("true circle in square", () => {
  it("return circle in square", () => {
    expect(isCircleInSquare(Math.PI * 2 * 2, 4 * 4)).toEqual(true);
  });

  it("false circle in square", () => {
    expect(isCircleInSquare(Math.PI * 4.01, 4 * 4)).toEqual(false);
  });
});

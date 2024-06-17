import { isRightTriangle } from "./task1";

describe("is Right Triangle", () => {
  it("return is Right Triangle", () => {
    expect(isRightTriangle(3, 4, 5)).toEqual(true);
    expect(isRightTriangle(6, 4, 3)).toEqual(false);
  });
});

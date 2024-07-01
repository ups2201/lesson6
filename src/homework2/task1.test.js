import { maxNum } from "./task1";

describe("Max number", () => {
  it("return max number", () => {
    const logSpy = jest.spyOn(console, "log");
    maxNum(9, 2);
    expect(logSpy).toHaveBeenCalledWith(9);
  });
});

import { sumAndMulti } from "./task1";

describe("Sum", () => {
  it("return sum of two numbers", () => {
    const logSpy = jest.spyOn(console, "log");
    sumAndMulti(1, 2);
    expect(logSpy).toHaveBeenCalledWith(2, 3);
  });
});

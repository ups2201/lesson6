import { sum } from "./task3";

describe("sum", () => {
  it("return sum", () => {
    const logSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("7");
    sum();
    expect(logSpy).toHaveBeenCalledWith(4);
  });
});
